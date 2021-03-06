import Event from './Event';
const ns = window.fivenations;

function Dock() {
    var args = [].slice.call(arguments);
    Event.apply(this, args);
}

Dock.prototype = Object.create(Event.prototype);
Dock.prototype.constructor = Dock;

/**
 * No-op function to be overwritten in the child objects
 * @param {object} [options] [extendable object that presents event details]
 * @return {void}
 * @example
 */
Dock.prototype.execute = function(options) {
    if (!options.targets || !options.data) {
        return;
    }
    const addAsLast = options.data.addAsLast || false;
    options.targets.forEach(function(id) {
        var targetEntity = ns.game.entityManager.entities(options.data.targetEntity);
        var entity = ns.game.entityManager.entities(id);
        if (options.resetActivityQueue) {
            entity.reset();
        }
        targetEntity.dockTarget(entity, addAsLast);
    });
};

export default Dock;
