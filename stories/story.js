export function story(StoryComponent, options = {}) {
    // Get the `withSource` option, default to true. Making this an option
    // allows us to opt-out of displaying the source of a story.
    const { withSource } = Object.assign({ withSource: true }, options);

    // The story export that Storybook will use
    const storyExport = () => StoryComponent;

    // Attach the source as a story paramter
    if (withSource) {
        storyExport.story = {
            parameters: {
                // `__source` is from our custom <include-source> SFC block
                // and webpack loader
                source: StoryComponent.__source,
            },
        };
    }

    return storyExport;
}
