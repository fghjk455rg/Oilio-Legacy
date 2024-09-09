Events.on(ContentInitEvent, e => {
	Vars.content.block("salt").attributes.set(Attribute.get("titanum"), 1);
});