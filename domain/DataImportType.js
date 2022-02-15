import AbstractIkologikInstallationsObject from "./AbstractIkologikInstallationsObject";

class DataImportType extends AbstractIkologikInstallationsObject{
    constructor(customer, installation){
        super(customer, installation);
        this.name = null;
        this.type = null;
        this.active = true;
        this.parameters = {};
        this.mapping = new DataImportTypeMapping();
    }
}

class DataImportTypeMapping{
    constructor() {
        this.tags = {};
    }
}

class DataImportTypeMappingTag{
    constructor() {
        this.sourceId = null;
        this.sourceName = null;
        this.sourceDataType = null;
        this.sourceDescription = null;
        this.tag = null;
    }
}

module.exports = DataImportType;
module.exports = DataImportTypeMapping;
module.exports = DataImportTypeMappingTag;