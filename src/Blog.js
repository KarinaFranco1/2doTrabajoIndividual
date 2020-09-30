import React from 'react';
import {Layout, Row, Col, Card, Image} from 'antd';
import './Blog.css';
import "antd/dist/antd.css";

const {Header,Footer,Sider,Content} = Layout;

function Blog(){
    return(
        <Layout>
            <Header style={{ color: 'white'}}>
            <div className="Logo"/>
            Empresa
            </Header>
            <Content>
                <div className= "site-layout-content">
                    
                    <Row>
                        <Col span={8}>
                            <Card title="Card title" bordered={true}>
                                <Image width src= "https://blog.dinterweb.com/hubfs/Imported_Blog_Media/38060627_ml-e1482765993493.jpg"/>
                                <br/>
                                <p>
                                Producto se refiere al conjunto de atributos tangibles que son fáciles de identificar por su precio, color, empaque, diseño, tamaño, utilidad, empresa fabricante y calidad.
                                </p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={true}>
                                <Image width src= "https://blog.dinterweb.com/hubfs/Imported_Blog_Media/38060627_ml-e1482765993493.jpg"/>
                                <br/>
                                <p>
                                Producto se refiere al conjunto de atributos tangibles que son fáciles de identificar por su precio, color, empaque, diseño, tamaño, utilidad, empresa fabricante y calidad.
                                </p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={true}>
                                <Image width src= "https://blog.dinterweb.com/hubfs/Imported_Blog_Media/38060627_ml-e1482765993493.jpg"/>
                                <br/>
                                <p>
                                producto se refiere al conjunto de atributos tangibles que son fáciles de identificar por su precio, color, empaque, diseño, tamaño, utilidad, empresa fabricante y calidad.
                                </p>
                            </Card>
                        </Col>
                    </Row>
                    </div>
            </Content>
            <Footer>
                <div>Asuncion/Paraguay</div>
                <br/>
                <div>Todos los derechos reservados</div>
            </Footer>
        </Layout>
    )
}

 export default Blog;