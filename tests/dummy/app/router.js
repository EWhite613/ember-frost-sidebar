import config from './config/environment'
import Ember from 'ember'
const {Router: EmberRouter} = Ember

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('demo', {path: '/'}, function () {
    this.route('overview', {path: '/'})
    this.route('content')
    this.route('size')
    this.route('dynamic-updates')
    this.route('label')
  })
})

export default Router
