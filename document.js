// http:// thejackalofjavascript.com/list-all-rest-endpoints/
module.exports = function (routes) {
  const Table = require('cli-table');
  const table = new Table({head: ["", "Name", "Path"]});
  console.log('\nAPI for this service \n');
  console.log('\n********************************************');
  console.log('\t\tRESTIFY');
  console.log('********************************************\n');
  for (const key in routes) {
    if (routes.hasOwnProperty(key)) {
      const val = routes[key];
      const _o = {};
      _o[val.method] = [val.name, val.spec.path];
      table.push(_o);
    }
  }
  console.log(table.toString());
  return table;
};
