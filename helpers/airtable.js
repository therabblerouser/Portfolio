const Airtable = require('airtable');
Airtable.configure({
  apiKey: 'keytTOxVwuu6mxNsL',
});

console.log(process.env.AIRTABLE_KEY);
module.exports = {
  // Get all Airtable posts
  getAirtablePosts: () => {
    const base = new Airtable.base('app5T8xaRBzxIPYH4');

    return new Promise((resolve, reject) => {
      const AirtablePosts = [];

      base('Table 1')
        .select({
          maxRecords: 3,
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
