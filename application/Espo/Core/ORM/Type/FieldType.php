<?php
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

namespace Espo\Core\ORM\Type;

class FieldType
{
    public const VARCHAR = 'varchar';
    public const TEXT = 'text';
    public const INT = 'int';
    public const FLOAT = 'float';
    public const DATE = 'date';
    public const DATETIME = 'datetime';
    public const DATETIME_OPTIONAL = 'datetimeOptional';
    public const ENUM = 'enum';
    public const MULTI_ENUM = 'multiEnum';
    public const ARRAY = 'array';
    public const CHECKLIST = 'checklist';
    public const CURRENCY = 'currency';
    public const PERSON_NAME = 'personName';
    public const ADDRESS = 'address';
    public const EMAIL = 'email';
    public const PHONE = 'phone';
    public const AUTOINCREMENT = 'autoincrement';
    public const URL = 'url';
    public const NUMBER = 'number';
    public const LINK = 'link';
    public const LINK_ONE = 'linkOne';
    public const FILE = 'file';
    public const IMAGE = 'image';
    public const LINK_MULTIPLE = 'linkMultiple';
    public const ATTACHMENT_MULTIPLE = 'attachmentMultiple';
}
