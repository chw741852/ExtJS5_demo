/**
 * Created by Cai on 2014/5/20 13:35.
 */
function getBasicLayouts() {
    var cardNav = function(incr) {
        var l = Ext.getCmp('card-wizard-panel').getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        l.setActiveItem(next);
        Ext.getCmp('card-prev').setDisabled(next === 0);
        Ext.getCmp('card-next').setDisabled(next === 2);
    };

    return {
        /*
         * ================  Start page config  =======================
         */
        // The default start page, also a simple example of a FitLayout.
        start: {
            id: 'start-panel',
            title: 'Start Page',
            layout: 'fit',
            bodyPadding: 25,
            contentEl: 'start-div'  // pull existing content from the page
        },

        /*
         * ================  AbsoluteLayout config  =======================
         */
        absolute: {
            id: 'absolute-panel',
            title: 'Absolute Layout',
            layout: 'absolute',
            defaults: {
                bodyPadding: 15,
                width: 200,
                height: 100,
                frame: true
            },
            items: [{
                title: 'Panel 1',
                x: 50,
                y: 50,
                html: 'Positioned at x:50, y:50'
            }, {
                title: 'Panel 2',
                x: 125,
                y: 125,
                html: 'Positioned at x:125, y:125'
            }]
        },

        /*
         * ================  AccordionLayout config  =======================
         */
        accordion: {
            id: 'accordion-panel',
            title: 'Accordion Layout',
            layout: 'accordion',
            defaults: {
                bodyPadding: 15
            },
            items: [{
                title: 'Introduction',
                tools: [{
                    type: 'gear'
                }, {
                    type: 'refresh'
                }],
                html: '<p>Here is some accordion content. Click on one of the other bars below for more.</p>'
            }, {
                title: 'Basic Content',
                html: '<br/><br/><p>More content. Open the third panel for a customized look and feel example.</p>',
                items: [{
                    xtype: 'button',
                    text: 'Show Next Panel',
                    handler: function() {
                        Ext.getCmp('acc-custom').expand(true);
                    }
                }]
            }, {
                id: 'acc-custom',
                title: 'Custom Panel Look and Feel',
                cls: 'custom-accordion',
                html: '<p>Here is an example of how easy it is to completely</p>'
            }]
        }
    }
}