import index1 from '../assets/index1.png';

export default props=>{

    return (
        <div className="index-page-div" >
            <div className="index-page" >
                <div className="common-width-1200" >
                    <div className="future-div" >
                        <div className="future-img" ></div>
                        <div className="company-box" >
                            <h3>合作公司</h3>
                            <div className="company-list" >
                                <div className="pdd" ></div>
                                <div className="vip" ></div>
                                <div className="weimob" ></div>
                                <div className="coupang" ></div>
                            </div>
                        </div>
                    </div>
                    <dl>
                        <dt>
                            {/* <p>专注行业</p> */}
                            <div style={{height:'10px'}} ></div>
                        </dt>
                        <dd>
                            <div>
                                <span className="tmt-img img" ></span>
                                <h5>TMT</h5>
                                <b>技术；产品；运营</b>
                                <p>过往成功案例：CTO COO CPO 技术总监 产品总监 运营总监 架构师 技术经理 开发工程师……</p>
                            </div>
                            <div>
                                <span className="ai-img img" ></span>
                                <h5>AI人工智能</h5>
                                <b>算法；解决方案</b>
                                <p>过往成功案例：导航算法，策略算法，Slam，架构师......</p>
                            </div>
                            <div>
                                <span className="finance-img img" ></span>
                                <h5>金融</h5>
                                <b>技术；产品；运营</b>
                                <p>过往成功案例：金融工程，量化，交易产品，算法</p>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
};