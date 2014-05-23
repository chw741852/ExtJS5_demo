/**
 * Created by Cai on 2014/5/23 16:52.
 */
function getCustomLayouts() {
    return {
        /*
         * CenterLayout demo panel
         */
        centerLayout: {
            id: 'center-panel',
            layout: 'ux.center',
            items: {
                title: 'Centered Panel: 75% of container width and 95% height',
                border: true,
                layout: 'ux.center',
                autoScroll: true,
                width: '75%',
                height: '95%',
                frame: false,
                bodyStyle: 'padding: 20px 0',
                items: [{
                    title: 'Inner Centered Panel',
                    html: 'Fixed 300px wide and full height. The container panel will also autoscroll if narrower than 300 px.',
                    width: 300,
                    frame: true,
                    bodyStyle: 'padding: 10px 20px;'
                }]
            }
        }
    };
}