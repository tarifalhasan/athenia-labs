"use client";
import logo from "@/public/Orange tint 1.svg";
import Image from "next/image";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import Loading from "./Loading";
import Result from "./Result";
import SubmitResport from "./SubmitResport";
const Main = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const [pdfContent, setPdfContent] = useState(""); // Add state to store PDF content
  const [showPdfDetails, setShowPdfDetails] = useState(false); // Add state to control content

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // Handle the selected file as needed
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    setShowPdfDetails(true);
    if (selectedFile) {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Introduce a 5-second delay
        const responseFromServer = await simulateServerUpload(
          selectedFile,
          selectedLanguage
        );
        setResponse(responseFromServer);
        setPdfContent(responseFromServer.pdfContent); // Set PDF content from the server response
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
        setFiles([...files, selectedFile]);
        setSelectedFile(null);
      }
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <div className="container space-y-5  lg:space-y-0 ">
      <div className=" grid  grid-cols-11 gap-6">
        <div className=" col-span-11 lg:col-span-5">
          <SubmitResport
            handleFileChange={handleFileChange}
            files={files}
            handleFileUpload={handleFileUpload}
            response={response}
            handleRemoveFile={handleRemoveFile}
          />
        </div>
        <div className="w-full col-span-11 lg:col-span-6">
          <div className="l">
            <div className="flex items-center justify-end gap-5">
              <button className="text-t-base font-pt-sens font-bold underline underline-offset-2 inline-flex items-center gap-2">
                <FiDownload className="text-t-20" />
                Download
              </button>
            </div>
            <div className="py-4 border-l pl-5 border-[#787177] ">
              <div className="px-4 bg-primary flex items-center justify-between rounded-t-md py-4">
                <h3 className="text-t-base font-pt-sens font-bold text-[#02222B]">
                  Preview
                </h3>
              </div>
              {loading ? (
                <Loading />
              ) : showPdfDetails ? (
                <Result />
              ) : (
                <div className=" bg-[#02222B] grid place-items-center  space-y-4  px-4 py-10 text-primary font-medium text-2xl text-center">
                  <h3> Please Upload PDF</h3>
                </div>
              )}
              <div className="px-4 bg-primary flex items-center justify-end rounded-b-md py-4">
                <div className="inline-flex items-center gap-3">
                  <h3 className="text-t-base font-pt-sens font-bold text-[#02222B]">
                    Powered by
                  </h3>
                  <Image src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
