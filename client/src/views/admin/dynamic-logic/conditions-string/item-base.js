/************************************************************************
 * This file is part of EspoCRM.
 *
 * EspoCRM - Open Source CRM application.
 * Copyright (C) 2014-2023 Yurii Kuznietsov, Taras Machyshyn, Oleksii Avramenko
 * Website: https://www.espocrm.com
 *
 * EspoCRM is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * EspoCRM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with EspoCRM. If not, see http://www.gnu.org/licenses/.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "EspoCRM" word.
 ************************************************************************/

define('views/admin/dynamic-logic/conditions-string/item-base', ['view'], function (Dep) {

    return Dep.extend({

        template: 'admin/dynamic-logic/conditions-string/item-base',

        data: function () {
            return {
                valueViewKey: this.getValueViewKey(),
                scope: this.scope,
                operator: this.operator,
                operatorString: this.operatorString,
                field: this.field,
                leftString: this.getLeftPartString(),
            };
        },

        setup: function () {
            this.itemData = this.options.itemData;

            this.level = this.options.level || 0;
            this.number = this.options.number || 0;
            this.scope = this.options.scope;

            this.operator = this.options.operator || this.operator;
            this.operatorString = this.options.operatorString || this.operatorString;

            this.additionalData = (this.itemData.data || {});

            this.field = (this.itemData.data || {}).field || this.itemData.attribute;

            this.wait(true);

            this.isCurrentUser = this.itemData.attribute && this.itemData.attribute.startsWith('$user.');

            if (this.isCurrentUser) {
                this.scope = 'User'
            }

            this.getModelFactory().create(this.scope, (model) => {
                this.model = model;

                this.populateValues();
                this.createValueFieldView();

                this.wait(false);
            });
        },

        getLeftPartString: function () {
            if (this.itemData.attribute === '$user.id') {
                return '$' + this.translate('User', 'scopeNames');
            }

            let label = this.translate(this.field, 'fields', this.scope);

            if (this.isCurrentUser) {
                label = '$' + this.translate('User', 'scopeNames') + '.' + label;
            }

            return label;
        },

        populateValues: function () {
            if (this.itemData.attribute) {
                this.model.set(this.itemData.attribute, this.itemData.value);
            }

            this.model.set(this.additionalData.values || {});
        },

        getValueViewKey: function () {
            return 'view-' + this.level.toString() + '-' + this.number.toString() + '-0';
        },

        getFieldValueView: function () {
            if (this.itemData.attribute === '$user.id') {
                return 'views/admin/dynamic-logic/fields/user-id';
            }

            const fieldType = this.getMetadata()
                .get(['entityDefs', this.scope, 'fields', this.field, 'type']) || 'base';

            return this.getMetadata().get(['entityDefs', this.scope, 'fields', this.field, 'view']) ||
                this.getFieldManager().getViewName(fieldType);
        },

        createValueFieldView: function () {
            const key = this.getValueViewKey();

            const viewName = this.getFieldValueView();

            this.createView('value', viewName, {
                model: this.model,
                name: this.field,
                selector: '[data-view-key="' + key + '"]',
            });
        },
    });
});
