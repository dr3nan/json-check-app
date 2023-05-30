"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    type: "object",
    properties: {
        _id: {
            type: "string"
        },
        users: {
            type: "object",
            properties: {
                enabled: {
                    type: "boolean"
                },
                scope: {
                    type: "string"
                },
                registration: {
                    type: "string"
                }
            }
        },
        ecommerce: {
            type: "object",
            properties: {
                enabled: {
                    type: "boolean"
                }
            }
        },
        counts: {
            type: "object",
            properties: {
                total_entries: {
                    type: "integer"
                },
                asset_count: {
                    type: "integer"
                },
                asset_size: {
                    type: "integer"
                }
            }
        },
        field_count: {
            type: "integer"
        },
        thumb_count: {
            type: "integer"
        },
        object_count: {
            type: "integer"
        },
        task_count: {
            type: "integer"
        },
        view_count: {
            type: "integer"
        },
        scene_count: {
            type: "integer"
        },
        credential_count: {
            type: "integer"
        },
        status: {
            type: "string"
        },
        settings: {
            type: "object",
            properties: {
                geo: {
                    type: "boolean"
                },
                timezone: {
                    type: "string"
                },
                timezone_offset: {
                    type: "string"
                },
                timezone_dst: {
                    type: "string"
                },
                cluster: {
                    type: "string"
                },
                powered_by_link: {
                    type: "boolean"
                },
                new_count: {
                    type: "boolean"
                },
                registration_migration_status: {
                    type: "string"
                },
                https_redirect: {
                    type: "boolean"
                },
                should_purge_record_history: {
                    type: "boolean"
                },
                support_access: {
                    type: "boolean"
                },
                use_multiple_api_subdomains: {
                    type: "boolean"
                },
                scriptProtectionEnabled: {
                    type: "boolean"
                },
                embed_login_method: {
                    type: "string"
                },
                ignoreBilling: {
                    type: "boolean"
                },
                v3_beta: {
                    type: "boolean"
                },
                v3_open_beta: {
                    type: "boolean"
                },
                mongo: {
                    type: "string"
                },
                solr: {
                    type: "string"
                }
            }
        },
        tasks: {
            type: "array",
            items: {},
            additionalItems: true
        },
        payment_processors: {
            type: "array",
            items: {},
            additionalItems: true
        },
        design: {
            type: "object",
            properties: {
                general: {
                    type: "object",
                    properties: {
                        theme: {
                            type: "string"
                        },
                        font: {
                            type: "string"
                        },
                        links: {
                            type: "object",
                            properties: {
                                color: {
                                    type: "string"
                                }
                            }
                        },
                        buttons: {
                            type: "object",
                            properties: {
                                color: {
                                    type: "string"
                                },
                                bg_color: {
                                    type: "string"
                                }
                            }
                        },
                        tables: {
                            type: "object",
                            properties: {
                                style: {
                                    type: "string"
                                },
                                dividers: {
                                    type: "boolean"
                                },
                                striped: {
                                    type: "boolean"
                                },
                                hover: {
                                    type: "boolean"
                                },
                                spacing: {
                                    type: "string"
                                }
                            }
                        }
                    }
                },
                regions: {
                    type: "object",
                    properties: {
                        body: {
                            type: "object",
                            properties: {
                                full_width: {
                                    type: "boolean"
                                }
                            }
                        },
                        header: {
                            type: "object",
                            properties: {
                                bg_color: {
                                    type: "string"
                                },
                                menu: {
                                    type: "object",
                                    properties: {
                                        show: {
                                            type: "boolean"
                                        },
                                        user_auth_based: {
                                            type: "boolean"
                                        },
                                        format: {
                                            type: "string"
                                        },
                                        color: {
                                            type: "string"
                                        },
                                        outline_or_fill_color: {
                                            type: "string"
                                        }
                                    }
                                },
                                title: {
                                    type: "object",
                                    properties: {
                                        color: {
                                            type: "string"
                                        },
                                        show_logo: {
                                            type: "boolean"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                components: {
                    type: "object",
                    properties: {
                        notifications: {
                            type: "object",
                            properties: {
                                color: {
                                    type: "string"
                                },
                                bg_color: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        layout: {
            type: "object",
            properties: {
                entry_scene_menu: {
                    type: "boolean"
                },
                app_menu_auth: {
                    type: "boolean"
                },
                theme: {
                    type: "string"
                }
            }
        },
        copying: {
            type: "boolean"
        },
        feature_flags: {
            type: "array",
            items: {},
            additionalItems: true
        },
        name: {
            type: "string"
        },
        slug: {
            type: "string"
        },
        distributions: {
            type: "array",
            items: {},
            additionalItems: true
        },
        versions: {
            type: "array",
            items: {},
            additionalItems: true
        },
        first_created: {
            type: "string"
        },
        account_id: {
            type: "string"
        },
        user_id: {
            type: "string"
        }
    }
};
exports.default = schema;
