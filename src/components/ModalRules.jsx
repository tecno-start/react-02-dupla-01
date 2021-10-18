import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledTooltip } from 'reactstrap';
import * as BiIcons from 'react-icons/bi';



function ModalRules() {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <BiIcons.BiHelpCircle size={30} style={{ 'color': '#ba55d3' }} onClick={toggle} id='tooltipModal' cursor='pointer' />
            <UncontrolledTooltip placement="top" target="tooltipModal" >
                Regras do Jogo
            </UncontrolledTooltip >
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader >Regras do Jogo</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur libero id faucibus. Arcu dui vivamus arcu felis bibendum. Mi ipsum faucibus vitae aliquet nec. Magna sit amet purus gravida quis blandit turpis cursus in. Massa tincidunt dui ut ornare lectus sit amet. Proin fermentum leo vel orci porta. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Et malesuada fames ac turpis egestas integer eget aliquet nibh. am. Mattis nunc sed blandit libero volutpat sed cras ornare.

                    Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Duis at tellus at urna condimentum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Neque vitae tempus quam pellentesque nec nam aliquam. Feugiat in fermentum posuere urna nec tincidunt praesent. Ipsum suspendisse ultrices gravida dictum fusce. Eget arcu dictum varius duis at consectetur. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Tellus elementum sagittis vitae et leo duis ut. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi.
                </ModalBody>
                <ModalFooter>
                    <Button className="bg-gradient-theme-left border-0" onClick={toggle}>Voltar</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalRules;