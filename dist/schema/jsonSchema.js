"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    type: 'object',
    properties: {
        _id: { type: 'string' },
        users: { $ref: '#/definitions/Users' },
        ecommerce: { $ref: '#/definitions/Ecommerce' },
        counts: { $ref: '#/definitions/Counts' },
        field_count: { type: 'number' },
        thumb_count: { type: 'number' },
        object_count: { type: 'number' },
        task_count: { type: 'number' },
        view_count: { type: 'number' },
        scene_count: { type: 'number' },
        credential_count: { type: 'number' },
        status: { type: 'string' },
        settings: { $ref: '#/definitions/Settings' },
        tasks: { type: 'array', items: { type: 'object' } },
        payment_processors: { type: 'array', items: { type: 'string' } },
        design: { type: 'object' },
        layout: { type: 'object' },
        copying: { type: 'boolean' },
        feature_flags: { type: 'array' },
        name: { type: 'string' },
        slug: { type: 'string' },
        distributions: { type: 'array' },
        versions: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    status: { type: 'string' },
                    objects: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                inflections: {
                                    type: 'object',
                                    properties: {
                                        singular: { type: 'string' },
                                        plural: { type: 'string' },
                                    },
                                    required: ['singular', 'plural'],
                                },
                                connections: {
                                    type: 'object',
                                    properties: {
                                        inbound: { type: 'array' },
                                        outbound: { type: 'array' },
                                    },
                                },
                                user: { type: 'boolean' },
                                status: { type: 'string' },
                                tasks: { type: 'array' },
                                type: { type: 'string' },
                                _id: { type: 'string' },
                                name: { type: 'string' },
                                fields: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            type: { type: 'string' },
                                            required: { type: 'boolean' },
                                            unique: { type: 'boolean' },
                                            user: { type: 'boolean' },
                                            conditional: { type: 'boolean' },
                                            rules: { type: 'array' },
                                            validation: { type: 'array' },
                                            _id: { type: 'string' },
                                            key: { type: 'string' },
                                            name: { type: 'string' },
                                            format: { type: 'object' },
                                        },
                                        required: ['type', 'required', 'unique', 'user', 'conditional', 'rules', 'validation', '_id', 'key', 'name'],
                                        // additionalProperties: true,
                                    },
                                },
                                template: { type: 'string' },
                                key: { type: 'string' },
                                identifier: { type: 'string' },
                            },
                            required: ['inflections', 'connections', 'user', 'status', 'tasks', 'type', '_id', 'name', 'fields', 'template', 'key', 'identifier'],
                            // additionalProperties: true,
                        },
                    },
                    scenes: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                groups: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            columns: {
                                                type: 'array',
                                                items: {
                                                    type: 'object',
                                                    properties: {
                                                        keys: { type: 'array' },
                                                        width: { type: 'number' },
                                                    },
                                                    required: ['keys', 'width'],
                                                },
                                            },
                                        },
                                    },
                                },
                                _id: { type: 'string' },
                                name: { type: 'string' },
                                slug: { type: 'string' },
                                key: { type: 'string' },
                                views: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            columns: { type: 'array' },
                                            links: {
                                                type: 'array',
                                                items: {
                                                    type: 'object',
                                                    properties: {
                                                        name: { type: 'string' },
                                                        type: { type: 'string' },
                                                        scene: { type: 'string' },
                                                    },
                                                    required: ['name', 'type', 'scene'],
                                                },
                                            },
                                            inputs: { type: 'array' },
                                            _id: { type: 'string' },
                                            groups: { type: 'array' },
                                            format: { type: 'string' },
                                            label: { type: 'string' },
                                            name: { type: 'string' },
                                            type: { type: 'string' },
                                            title: { type: 'string' },
                                            description: { type: 'string' },
                                            source: { type: 'object' },
                                            key: { type: 'string' },
                                        },
                                        required: ['columns', 'links', 'inputs', '_id', 'groups', 'format', 'label', 'name', 'type', 'title', 'description', 'source', 'key'],
                                    },
                                },
                                parent: { type: 'string' },
                            },
                            required: ['groups', '_id', 'name', 'slug', 'key', 'views', 'parent'],
                        },
                    },
                },
                required: ['_id', 'status', 'objects', 'scenes'],
            },
        },
        first_created: { type: 'string' },
        account_id: { type: 'string' },
        user_id: { type: 'string' },
    },
    definitions: {
        Users: {
            type: 'object',
            properties: {
                enabled: { type: 'boolean' },
                scope: { type: 'string' },
                registration: { type: 'string' },
            },
            required: ['enabled', 'scope', 'registration'],
            additionalProperties: false,
        },
        Ecommerce: {
            type: 'object',
            properties: {
            // Define the properties of the Ecommerce object here
            },
            required: ['enabled'],
            additionalProperties: false,
        },
        Counts: {
            type: 'object',
            properties: {
            // Define the properties of the Counts object here
            },
            required: ['property1', 'property2'],
            additionalProperties: false,
        },
        Settings: {
            type: 'object',
            properties: {
            // Define the properties of the Settings object here
            },
            required: ['property1', 'property2'],
            additionalProperties: false,
        },
        // Design: {
        //   type: 'object',
        //   properties: {
        //     // Define the properties of the Design object here
        //   },
        // },
    },
    required: ['_id', 'users', 'ecommerce', 'counts', 'field_count', 'thumb_count', 'object_count', 'task_count', 'view_count', 'scene_count', 'credential_count', 'status', 'settings', 'tasks', 'payment_processors', 'design', 'layout', 'copying', 'feature_flags', 'name', 'slug', 'distributions', 'versions', 'first_created', 'account_id', 'user_id'],
    additionalProperties: true,
};
exports.default = schema;
