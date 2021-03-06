export module Helper {
    /**
     * this function create an object with the params sort and order
     * get the params from the query object
     * finally, the variables are deleted from the query
     *
     * @param query: contains the variable sort and order
     *
     * @return an object with the params sort and order
     */
    export function getSort(query: any): object {
        let sortBy = {};

        if (query.sort && query.order) {
            const sort = query.sort;
            const order = query.order;
            sortBy[sort] = order;
        }
        delete query.sort;
        delete query.order;

        return sortBy;
    }

    /**
     * this function create an object with the params offset and limit
     * get the params from the query object
     * finally, the variables are deleted from the query
     *
     * @param query: contains the variable sort and order
     *
     * @return an object with the params sort and order
     */
    export function getLimit(query: any): any {
        let area = {
            offset: 0,
            limit: 999
        };

        if (query.offset && query.limit) {
            area.offset = parseInt(query.offset);
            area.limit = parseInt(query.limit);
        } else if (query.limit) {
            area.limit = parseInt(query.limit);
        }
        delete query.offset;
        delete query.limit;

        return area;
    }
}
