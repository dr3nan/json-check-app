import removeDuplicates from '../helpers/removeDuplicates';
import { JSONResponse } from '../types/types';

describe('removeDuplicates_function', () => {

  // Tests that the function removes duplicates from a JSONResponse object with no duplicates.
  it("test_remove_duplicates_with_no_duplicates", () => {
    const response: JSONResponse = {
      _id: '123',
      users: {},
      ecommerce: {},
      counts: {},
      field_count: 0,
      thumb_count: 0,
      object_count: 2,
      task_count: 0,
      view_count: 0,
      scene_count: 2,
      credential_count: 0,
      status: 'success',
      settings: {},
      tasks: [],
      payment_processors: [],
      design: {},
      layout: {},
      copying: false,
      feature_flags: [],
      name: 'Test Response',
      slug: 'test-response',
      distributions: [],
      versions: [
        {
          _id: '456',
          status: 'active',
          objects: [
            {
              inflections: {
                singular: 'Order',
                plural: 'Orders'
              },
              connections: {
                inbound: [],
                outbound: []
              },
              user: false,
              status: 'active',
              tasks: [],
              type: 'test',
              _id: '456',
              name: 'Test Object',
              fields: [],
              template: '',
              key: 'test-object',
              identifier: '',
            },
          ],
          scenes: [
            {
              groups: [],
              _id: '789',
              name: 'Test Scene',
              slug: 'test-scene',
              key: 'test-scene',
              views: [],
              parent: '',
            },
          ],
        },
      ],
      first_created: '',
      account_id: '',
      user_id: '',
    };


    const result = removeDuplicates(response);

    expect(result.cleanedResponse).toEqual(response);
    expect(result.objectDuplicates).toEqual([]);
    expect(result.sceneDuplicates).toEqual([]);
  });

  // Tests that the function removes duplicates from a JSONResponse object with duplicate objects and scenes.
  it("test_remove_duplicates_with_duplicates", () => {
    const response: JSONResponse = {
      _id: "123",
      users: {},
      ecommerce: {},
      counts: {},
      field_count: 0,
      thumb_count: 0,
      object_count: 2,
      task_count: 0,
      view_count: 0,
      scene_count: 2,
      credential_count: 0,
      status: "success",
      settings: {},
      tasks: [],
      payment_processors: [],
      design: {},
      layout: {},
      copying: false,
      feature_flags: [],
      name: "Test Response",
      slug: "test-response",
      distributions: [],
      versions: [
        {
          _id: "456",
          status: "active",
          objects: [
            {
              inflections: {
                singular: 'Order',
                plural: 'Orders'
              },
              connections: {
                inbound: [],
                outbound: []
              },
              user: false,
              status: "active",
              tasks: [],
              type: "test",
              _id: "456",
              name: "Test Object",
              fields: [],
              template: "",
              key: "test-object",
              identifier: ""
            },
            {
              inflections: {
                singular: 'Order',
                plural: 'Orders'
              },
              connections: {
                inbound: [],
                outbound: []
              },
              user: false,
              status: "active",
              tasks: [],
              type: "test",
              _id: "456",
              name: "Test Object",
              fields: [],
              template: "",
              key: "test-object",
              identifier: ""
            },
          ],
          scenes: [
            {
              groups: [],
              _id: "101112",
              name: "Test Scene",
              slug: "test-scene",
              key: "test-scene",
              views: [],
              parent: ""
            },
            {
              groups: [],
              _id: "101112",
              name: "Test Scene",
              slug: "test-scene",
              key: "test-scene",
              views: [],
              parent: ""
            },
          ]
        }
      ],
      first_created: "1",
      account_id: "1",
      user_id: "1"
    };

    const result = removeDuplicates(response);

    expect(result.cleanedResponse).toEqual({
      _id: "123",
      users: {},
      ecommerce: {},
      counts: {},
      field_count: 0,
      thumb_count: 0,
      object_count: 2,
      task_count: 0,
      view_count: 0,
      scene_count: 2,
      credential_count: 0,
      status: "success",
      settings: {},
      tasks: [],
      payment_processors: [],
      design: {},
      layout: {},
      copying: false,
      feature_flags: [],
      name: "Test Response",
      slug: "test-response",
      distributions: [],
      versions: [
        {
          _id: "456",
          status: "active",
          objects: [
            {
              inflections: {
                singular: 'Order',
                plural: 'Orders'
              },
              connections: {
                inbound: [],
                outbound: []
              },
              user: false,
              status: "active",
              tasks: [],
              type: "test",
              _id: "456",
              name: "Test Object",
              fields: [],
              template: "",
              key: "test-object",
              identifier: ""
            },
          ],
          scenes: [
            {
              groups: [],
              _id: "101112",
              name: "Test Scene",
              slug: "test-scene",
              key: "test-scene",
              views: [],
              parent: ""
            },
          ]
        }
      ],
      first_created: "1",
      account_id: "1",
      user_id: "1"
    });
    expect(result.objectDuplicates).toEqual([
      {
        inflections: {
          singular: 'Order',
          plural: 'Orders'
        },
        connections: {
          inbound: [],
          outbound: []
        },
        user: false,
        status: "active",
        tasks: [],
        type: "test",
        _id: "456",
        name: "Test Object",
        fields: [],
        template: "",
        key: "test-object",
        identifier: ""
      },
    ]);
    expect(result.sceneDuplicates).toEqual([
      {
        groups: [],
        _id: "101112",
        name: "Test Scene",
        slug: "test-scene",
        key: "test-scene",
        views: [],
        parent: ""
      },
    ]);
  });
});