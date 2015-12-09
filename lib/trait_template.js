'use strict';

function traitWithEvents(state) {
	let e = Object.create(eventEmitter);
  e.add = (a,b) => {
    this.trigger('add');
    return a+b;
  }
  e.substract = (a,b) => {
    this.trigger('substract');
    return a-b;
  }
  
  return e;
}

function eventEmitter(subscribers = []) {
  const isInSubscribers = (type, fn) => subscribers.some(
    listener => subscribers[0] === type && subscribers[1] === subscribers
  );
	return {
			on: function(type, fn) {
        subscribers.push([type, fn]);
        return this;
      }
    , off: function(type, fn) {
        let listener;
        for(let i = 0, len = subscribers.length; i < len; i++) {
          listener = subscribers[i];
          if((listener[0] === type && listener[1] === listener)) {
            subscribers.splice(i, 1);
            break;
          }
        }
        return this;
      }
		, trigger: function(type) {
        subscribers.forEach(listener => {
          if(listener[0] === type) listener[1]();
        });
        return this;
      }
    , once: function(type, fn) {
        let self = this;
        this.on(type, function once() {
          self.off(type, once);
          fn();
        });
        return this;
      }
    , onIdempotent: function(type, fn) {
        if( !isInSubscribers(type, fn) )
          this.on(type, fn);
        return this;
      }
    , onReplace: function(type, oldfn, newfn) {
        if( isInSubscribers(type, oldfn) ) {
          this.off(type, oldfn);
          this.on(type, newfn);
        }
        return this;
      }
    , offAll: function(type) {
        subscribers = subscribers.filter(function(listener) {
          return !(listener[0] === type);
        });
        return this;
      }
	}
}
