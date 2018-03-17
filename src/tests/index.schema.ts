const schema = {
    get:  {
        title: 'index schema - get',
        type: 'object',
        required: ['message'],
        properties: {
            message: {
                type: 'string'
            }
        }
    },
    post: {
        title: 'index schema - post',
        type: 'object',
        required: ['message', 'number'],
        properties: {
            message: {
                type: 'string'
            },
            number: {
                type: 'number'
            }
        }
    }
}

export default schema