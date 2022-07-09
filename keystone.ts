// keystone.ts

import { config, list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { Lists } from '.keystone/types';

const Post: Lists.Post = list({
    fields: {
        title: text({ validation: { isRequired: true } }),
        slug: text({ isIndexed: 'unique', isFilterable: true }),
        content: text(),
    },
});

const User: Lists.User = list({
    fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    },
});

export default config({
    db: { provider: 'sqlite', url: 'file:./app.db' },
    experimental: {
        generateNextGraphqlAPI: true,
        generateNodeAPI: true,
    },
    lists: { Post, User },
});