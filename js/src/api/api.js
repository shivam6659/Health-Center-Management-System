import http from "axios";

class Api {
    static async baseHeaders() {
        return {
            "Content-Type": "application/json",
            // "Authorization":""
        };
    }

    static baseUrl() {
        return "";
    }

    static get(route, headers, params, timeout) {
        return this.api("get", route, headers, params, {}, timeout);
    }

    static put(route, headers, params, data, timeout) {
        return this.api("put", route, headers, params, data, timeout);
    }

    static post(route, headers, params, data, timeout) {
        return this.api("post", route, headers, params, data, timeout);
    }

    static patch(route, headers, params, data, timeout) {
        return this.api("patch", route, headers, params, data, timeout);
    }

    static delete(route, headers, params, data, timeout) {
        return this.api("delete", route, headers, params, data, timeout);
    }

    static async api(requestType, route, headers, params, data, timeout = 60000) {
        const host = Api.baseUrl();
        const url = `${host}${route}`;

        const baseHeaders = await Api.baseHeaders();
        const requestConfig = {
            headers: headers ? { ...baseHeaders, ...headers } : baseHeaders,
        };

        if (params) {
            requestConfig.params = params;
        }

        http.create();
        http.defaults.timeout = timeout;

        if (requestType === "get" || requestType === "delete") {
            return http[requestType](url, requestConfig)
                .then(response => {
                    return checkValidJSON(response);
                })
                .catch(error => {
                    console.log("error for get", error);
                    return Promise.reject(error);
                });
        }

        return http[requestType](url, data, requestConfig)
            .then(response => {
                return checkValidJSON(response);
            })
            .catch(error => {
                console.log("error for post", error);
                return Promise.reject(error);
            });
    }
}

export default Api;

function checkValidJSON(response) {
    if (response.data !== "string") return response;
    return Promise.reject(response);
}

// import fs from 'fs';
// import path from 'path';
// import data from '../../database/data.json';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json(data);
//   } 
//   else if (req.method === 'DELETE') {
//     const index = req.query.index;
//     if (index !== undefined && index >= 0 && index < data.length) {
//       data.splice(index, 1);

//       const dataFilePath = path.join(process.cwd(), 'database', 'data.json');
//       fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

//       res.status(200).json({ message: 'Item deleted successfully' });
//     } else {
//       res.status(400).json({ message: 'Invalid index provided' });
//     }
//   }
//   else if (req.method === 'PUT') {
//     const index = req.query.index;
//     if (index !== undefined && index >= 0 && index < data.length) {
//       const updatedItem = req.body;

//       data[index] = updatedItem;

//       const dataFilePath = path.join(process.cwd(), 'database', 'data.json');
//       fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

//       res.status(200).json({ message: 'Item updated successfully' });
//     } else {
//       res.status(400).json({ message: 'Invalid index provided' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }