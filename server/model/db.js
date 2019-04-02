var Sequelize = require('sequelize');

let sequelize = new Sequelize(
  'owner',
  'root',
  '123456',
  {
    'dialect': 'mysql',  
    'host': '119.23.31.201', 
    'port': 3306,   
    'pool': {
      'maxConnections': 20,
      'minConnections': 0,
      'maxIdleTime': 10000, //	连接最大空置时间（毫秒），超时后将释放连接  
      'max': 5,
      'min': 0,
      'idle': 30000
    }
  }
)


function defineModel(name, attributes){
  let attrs = {}

  for(let key in attributes){
    let value = attributes[key]
    if( typeof value === 'object' && value['type'] ){
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    }else {
      attrs[key] = {
        type: value,
        allowNull: false
      }
    }
  }

  attrs.createdAt = {
    type: Sequelize.DATE,
    allowNull: false
  };

  attrs.updatedAt = {
    type: Sequelize.DATE,
    allowNull: false
  };
  // attrs.version = {
  //     type: Sequelize.BIGINT,
  //     allowNull: false
  // };

  return sequelize.define(name, attrs, {
      tableName: name,
      timestamps: false,
      // hooks: {
      //     beforeValidate: function (obj) {
      //         let now = Date.now();
      //         if (obj.isNewRecord) {
      //             if (!obj.id) {
      //                 obj.id = generateId();
      //             }
      //             obj.createdAt = now;
      //             obj.updatedAt = now;
      //             obj.version = 0;
      //         } else {
      //             obj.updatedAt = Date.now();
      //             obj.version++;
      //         }
      //     }
      // }
    });
}

export default defineModel


