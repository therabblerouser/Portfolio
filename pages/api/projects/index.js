import { getAirtablePosts } from '../../../helpers/airtable';
import { serialize } from '../../../helpers/serialize';

module.exports = async (req, res) => {
  return new Promise((resolve, reject) => {
    getAirtablePosts()
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(serialize(data));
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        resolve();
      });
  });
};
