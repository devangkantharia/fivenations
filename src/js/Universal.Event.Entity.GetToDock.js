define('Universal.Event.Entity.GetToDock', ['Universal.Event'], function(Event) {

    var ns = window.fivenations;

    function GetToDock() {
        var args = [].slice.call(arguments);
        Event.apply(this, args);
    }

    GetToDock.prototype = Object.create(Event.prototype);
    GetToDock.prototype.constructor = GetToDock;

    /**
     * No-op function to be overwritten in the child objects
     * @param {object} [options] [extendable object that presents event details]
     * @return {void}
     * @example
     */
    GetToDock.prototype.execute = function(options) {
        if (!options.targets || !options.data) {
            return;
        }
        options.targets.forEach(function(id) {
            var targetEntity = ns.game.entityManager.entities(options.data.targetEntity);
            var entity = ns.game.entityManager.entities(id);
            if (options.resetActivityQueue) {
                entity.reset();
            }
            entity.getToDock(targetEntity);
        });
    };

    return GetToDock;

});