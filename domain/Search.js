
class SearchFilter{
    constructor(field, type, values) {
        this.field = field;
        this.type = type;
        this.values = values;
    }
}

class SearchOrder{
    constructor(field, type) {
        this.field = field;
        this.type = type;
    }
}

class SearchPagination{
    constructor(page=0, size=50 ) {
        this.page = page;
        this.size = size;
    }
}

class Search{
    constructor() {
        this.filter = [];
        this.order = [];
        this.pagination = new SearchPagination();
    }

    addFilter(filter_field, filter_type, filter_values){
        this.filter.push(
            new SearchFilter(
                filter_field,
                filter_type,
                filter_values,
            )
        )
    }

    addMultipleFilters(filter){
        for (const item of filter) {
            this.filter.push(
                new SearchFilter(
                    item[0],
                    item[1],
                    item[2]
                )
            )
        }
    }

    addOrder(order_field, order_type){
        this.order.push(
            new SearchOrder(
                order_field,
                order_type
            )
        )
    }

    setPagination(page =0, size =50){
        this.pagination = new SearchPagination( page, size);
    }
}

module.exports = Search;