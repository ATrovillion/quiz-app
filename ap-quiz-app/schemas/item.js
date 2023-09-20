export default {
    name: 'item',
    type: 'document',
    title: 'Item',
    fields: [
        {
            name: 'question',
            type: 'string',
            title: 'Question',
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'string',
        },
        {
            name: 'explanation',
            title: 'Explanation',
            type: 'string'
        }
    ]
}