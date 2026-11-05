  const [selectedText, setSelectedText] = useState('');
  const [convertedAudio, setConvertedAudio] = useState(null);

  const handleDocumentPick = async () => {
    setSelectedText("Sample text extracted from document.");
  };

  const handleTextConversion = async (text) => {
    console.log("Converting text up to 100k words...");
  };

