import React from 'react';
import "antd/dist/antd.css";
import './Test.css';

import { Layout, Menu, Breadcrumb, Row, Col, Card, Image, Pagination } from 'antd';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function Test() {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Novedades</Menu.Item>
                    <Menu.Item key="2">Rebajas</Menu.Item>
                    <Menu.Item key="3">Iniciar Sesión</Menu.Item>
                    <Menu.Item key="4">Registrarse</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title="Vestidos">
                            <Menu.Item key="1">Maxi Vestidos</Menu.Item>
                            <Menu.Item key="2">Mini Vestidos</Menu.Item>
                            <Menu.Item key="3">Vestido Casual</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Bottoms">
                            <Menu.Item key="5">Falda</Menu.Item>
                            <Menu.Item key="6">Jeans</Menu.Item>
                            <Menu.Item key="7">Shorts</Menu.Item>
                            <Menu.Item key="8">Monitos</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title="Deportes">
                            <Menu.Item key="9">Pantalones de yoga</Menu.Item>
                            <Menu.Item key="10">Yoga Tops</Menu.Item>
                            <Menu.Item key="11">Leggings de gimnasio</Menu.Item>
                            <Menu.Item key="12">Conjunto deportivo</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title="Hombres">
                            <Menu.Item key="9">Camisas</Menu.Item>
                            <Menu.Item key="10">Corbatas</Menu.Item>
                            <Menu.Item key="11">Chaquetas</Menu.Item>
                            <Menu.Item key="12">Jogger</Menu.Item>
                            <Menu.Item key="12">Sudaderas</Menu.Item>
                            <Menu.Item key="12">Cardigans</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 20px 20px' }}>
                    <Breadcrumb style={{ margin: '20px 0' }}>
                        <Breadcrumb.Item>Sugerencias</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 20,
                            margin: 0,
                            minHeight: 600,
                        }}>
                        <Row>
                            <Col span={6}>
                                <Card title="Vestido Tami Love Noir" bordered={true}>
                                    <Image width src="https://images-na.ssl-images-amazon.com/images/I/61bU4ViU5%2BL._AC_SL1001_.jpg" />
                                    <br />
                                    <p>
                                        Tamaños disponibles en: S, M, L.
                                </p>
                                    <p>
                                        Colores disponibles: Negro, Rojo, Rosa.
                                </p>
                                    <p>
                                        Precio: $25.99
                                </p>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Vestido Coconut Palm" bordered={true}>
                                    <Image width src="https://9eba410b89d8c2b814f2-f653ee9e3b6aad4b2107b6a1ab482f61.ssl.cf2.rackcdn.com/product-hugerect-940908-112265-1490004508-136be288ddcfe9030a8632f9ffcdb003.jpg" />
                                    <br />
                                    <p>
                                        Tamaños disponibles en: S, M.
                                </p>
                                    <p>
                                        Colores disponibles: Blanco.
                                </p>
                                    <p>
                                        Precio: $29.99
                                </p>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Vestido Midi Blue Garden" bordered={true}>
                                    <Image width src="https://www.dhresource.com/0x0/f2/albu/g7/M01/8D/75/rBVaSVsJHnqAMFT9AAJe_JkKqPA101.jpg" />
                                    <br />
                                    <p>
                                        Tamaños disponibles en: S, M.
                                </p>
                                    <p>
                                        Colores disponibles: Modelo unico.
                                </p>
                                    <p>
                                        Precio: $21.99
                                </p>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Vestido Pía Black Garden" bordered={true}>
                                    <Image width src="https://vestidosyzapatos.es/wp-content/uploads/2018/06/vestidos-de-fiesta-backless-dress-vestido-espalda-abierta-vestido-largo-verano-2018-vestidos-baratos-online-descuento-ropa-barata-online-vestidosyzapatos.es-flores-azul-2.jpg" />
                                    <br />
                                    <p>
                                        Tamaños disponibles en: XS, S.
                                </p>
                                    <p>
                                        Colores disponibles: Modelo unico.
                                </p>
                                    <p>
                                        Precio: $33.99
                                </p>
                                </Card>
                                <br />
                            </Col>
                            <Col span={6}>
                                <Card title="Vestido Bohemios Vintage" bordered={true}>
                                    <Image width src="https://ae01.alicdn.com/kf/HTB1JBGgaITxK1Rjy0Fgq6yovpXaU/Vestido-bohemios-largos-con-estampado-Floral-para-mujer-Vestido-bohemio-de-verano-para-la-playa-Vestido.jpg_q50.jpg" />
                                    <br />
                                    <p>
                                        Tamaños disponibles en: XS, M , L.
                                </p>
                                    <p>
                                        Colores disponibles: Modelo unico.
                                </p>
                                    <p>
                                        Precio: $42.99
                                </p>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Vestido Conce" bordered={true}>
                                    <Image width src="https://cdn.shopify.com/s/files/1/0062/7500/6515/products/product-image-896651839.jpg" />
                                    <br />
                                    <p>
                                        Tamaños disponibles en: XS, S, M.
                                </p>
                                    <p>
                                        Colores disponibles: Azul y estampados.
                                </p>
                                    <p>
                                        Precio: $37.99
                                </p>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Vestido Atenea Mix" bordered={true}>
                                    <Image width src="https://pipiluxury.com/wp-content/uploads/2020/05/NEDEINS-Women-V-Neck-Split-Dress-Floral-Print-Long-Summer-Spaghetti-Strap-Party-Pink-Chiffon-Elegant-3.jpg" />
                                    <br />
                                    <p>
                                        Tamaños disponibles en: M, L.
                                </p>
                                    <p>
                                        Colores disponibles: Rosa y Celeste.
                                </p>
                                    <p>
                                        Precio: $20.99
                                </p>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Vestido Louise Petróleo" bordered={true}>
                                    <Image width src="https://i.etsystatic.com/18236162/r/il/201b8b/1628087393/il_794xN.1628087393_mjjw.jpg" />
                                    <br />
                                    <p>
                                        Tamaños disponibles en: XS, S, M.
                                </p>
                                    <p>
                                        Colores disponibles: Modelo Unico.
                                </p>
                                    <p>
                                        Precio: $25.99
                                </p>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Pagination defaultCurrent={1} total={10} />
                    </Content>
                </Layout>
            </Layout>
            <Footer className="Footer">
                <div>Luque - Paraguay</div>
                <div>Todos los derechos reservados®</div>
            </Footer>
        </Layout>
    )
}

export default Test;