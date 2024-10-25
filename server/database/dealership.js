var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dealershipSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{5}(-\d{4})?/.test(v); // US ZIP code validation
      },
      message: props => `${props.value} is not a valid ZIP code!`
    }
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  shortName: {
    type: String,
  },
  fullName: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model('Dealership', dealershipSchema);
