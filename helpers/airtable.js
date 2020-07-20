require('dotenv').config();

const Airtable = require('airtable');
Airtable.configure({
  apiKey: process.env.AIRTABLE_KEY,
});

module.exports = {
  // Get all Airtable posts
  getAirtablePosts: () => {
    const base = new Airtable.base(process.env.AIRTABLE_BASE);

    return new Promise((resolve, reject) => {
      const AirtablePosts = [];

      base('Table 1')
        .select({
          maxRecords: 5,
          view: 'Grid view',
        })
        .eachPage(
          (records, fetchNextPage) => {
            // Get the fields
            records.forEach((record) => {
              const post = {
                id: record.id,
                title: record.get('title'),
                description: record.get('description'),
                tools: record.get('tools'),
                repository: record.get('repository'),
                site: record.get('site'),
              };

              // Push post to
              AirtablePosts.push(post);
            });

            fetchNextPage();
          },
          (error) => {
            if (error) {
              console.error(error);
              reject({ error });
            }
            resolve(AirtablePosts);
          }
        );
    });
  },
};
