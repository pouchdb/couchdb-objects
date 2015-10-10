/*
	Copyright 2013-2014, Marten de Vries

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

"use strict";

module.exports = function buildUserContextObject(info) {
  //documentation: http://couchdb.readthedocs.org/en/latest/json-structure.html#user-context-object
  //a default userCtx (admin party like)
  return {
    db: info.db_name,
    name: localStorage.getItem('pouch.userCtx.name'),
    roles: ["_admin"]
  };
};
