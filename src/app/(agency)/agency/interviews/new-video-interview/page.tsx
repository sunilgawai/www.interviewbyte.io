import VideoInterviewForm from "@/components/forms/video-interview-form";
import React from "react";

const NewVideoInterview = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-10 p-24">
      <VideoInterviewForm />
    </div>
  );
};

export default NewVideoInterview;
