import React from 'react';
import { Link } from 'react-router';
import VideoDialogContainer from './video_dialog_container';
import DeleteButtonContainer from './delete_button_container';
import VideoPopover from './details/video_popover';

class VideoHoverItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="videoHoverCover">
        <h2 className="videoTitle">
          {this.props.video.name}
        </h2>
        <Link
          className="playLink"
          to={`${this.props.video.category}/videos/${this.props.video.id}`}>
          <img
            src="https://res.cloudinary.com/ddqzltwv6/image/upload/v1478799798/play_m5eu3t.png" className="playLinkImg" alt="play" />
        </Link>
        <div className='adminButtons'>
          <VideoDialogContainer video={this.props.video}/>
          <DeleteButtonContainer video={this.props.video}/>
        </div>
        <VideoPopover video={this.props.video}/>
      </div>
    );
  }
}
export default VideoHoverItem;
