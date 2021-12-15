import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
    public init(){
        var height = Laya.Browser.clientHeight;
        var width = Laya.Browser.clientWidth;
		// CONST.STAGEHEIGHT = Math.floor((height/width)*CONST.STAGEWIDTH);
		Laya.init(CONST.STAGEWIDTH, CONST.STAGEHEIGHT, Laya.WebGL);
		Config.isAntialias = true;
        //
        Laya.stage.frameRate = Laya.Stage.FRAME_FAST;//Laya.Stage.FRAME_SLOW
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;//Laya.Stage.SCALE_FIXED_WIDTH;//Laya.Stage.SCALE_SHOWALL;//Laya.Stage.SCALE_EXACTFIT;
        Laya.stage.bgColor = "#cccccc";//
        Laya.MouseManager.multiTouchEnabled = false;
        
        ///
        this.initModule();
        /**加载游戏 */
        loginController.getInstance();
        resManager.getInstance().addGroupRes(resConfig.loadingRes);//设置加载loading页的资源
        resManager.getInstance().startLoad(GAMEEVENT.ONRESPROGRESSLOGIN,GAMEEVENT.ONRESCOMPLETELOGIN);//进行loading页的加载

        //进行游戏配置数据的请求
        let mydata = {
            "a":"data_config_info",
            "m":"init",
            "d":{}
        };
        let tmp_http = net.httpJson.getInstance();
        tmp_http.httpPost(CONST.LOGIN_URL,mydata);
        
    }
    /** */
    private initModule(){
        /**初始游戏层深度 */
        gameLayer.initModule();
        /** */
        mainController.getInstance();
        /** */
        loginController.getInstance();
    }
}
new GameMain().init();