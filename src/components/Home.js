import React from "react";
import Modal from "./Modal";
import AuthSignIn from "./AuthSignIn";

class Home extends React.Component {
    state = {showModal: false};



    handleShowModal = () => this.setState({showModal: true});

    handleCloseModal = () => this.setState({showModal: false});

    render() {
        return (
            <main className="home">
                <h1>Raspberry kingdom</h1>
                <button className="btnDefault" onClick={this.handleShowModal}>ENTER THE GATES</button>
                {this.state.showModal ? (
                    <Modal onClose={this.handleCloseModal}>
                        <AuthSignIn onClose={this.handleCloseModal} />
                    </Modal>
                ) : null}
            </main>
        )
    }
}

export default Home;
