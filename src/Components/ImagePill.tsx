
import emanPic from "../Images/eman.jpeg"

export default function ImagePill() {
    return (
      <div className="">
        <img
          src={emanPic}
          alt="Eman Pelayo"
          className="w-32 h-32 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full object-cover lg: "
        />
      </div>
    );
  }
