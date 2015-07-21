import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  setupController: function(controller) {
    this.store.find('speaker').then(function(speakers) {
      var saturdayMorning = speakers.slice(0, 3);
      var saturdayAfternoon = speakers.slice(3, 7);
      var sundayMorning = speakers.slice(7, 10);
      var sundayAfternoon = speakers.slice(10, 13);

      controller.set('saturdayMorning', saturdayMorning);
      controller.set('saturdayAfternoon', saturdayAfternoon);
      controller.set('sundayMorning', sundayMorning);
      controller.set('sundayAfternoon', sundayAfternoon);
    });
  }
});
