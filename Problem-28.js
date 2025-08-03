//****Event Emitter ****/
/**
 * Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

 */


class EventEmitter {
    constructor() {
        this.events = new Map(); // Stores event names and their callback arrays
    }

    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        
        const callbacks = this.events.get(eventName);
        callbacks.push(callback);
        
        return {
            unsubscribe: () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
                return undefined;
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }
        
        const callbacks = this.events.get(eventName);
        return callbacks.map(callback => callback(...args));
    }
}

// Time complexity: O(n) for both subscribe and emit methods, where n is the number of callbacks for the event.
// Space complexity: O(n) for storing the callbacks in the Map.