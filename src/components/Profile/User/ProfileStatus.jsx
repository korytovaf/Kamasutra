import React from 'react';
import style from './User.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
               status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <span
                            onDoubleClick={this.activateEditMode}>{this.props.status || 'Добавьте статус'}</span>
                        : <input
                            className={style.input}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            onChange={this.onStatusChange}
                            value={this.state.status}/>
                }
            </div>
        )

    }
}

export default ProfileStatus