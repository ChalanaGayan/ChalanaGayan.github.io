import { useState, useRef } from 'react';

const BrowserWindow = () => {
  const [url, setUrl] = useState('https://www.chalanagayan.me');
  const [inputUrl, setInputUrl] = useState('https://www.chalanagayan.me');
  const [history, setHistory] = useState(['https://www.chalanagayan.me']);
  const [historyIndex, setHistoryIndex] = useState(0);
  const iframeRef = useRef(null);

  const handleNavigate = (e) => {
    e.preventDefault();
    let newUrl = inputUrl.trim();

    // Add https:// if no protocol is specified
    if (!newUrl.match(/^https?:\/\//i)) {
      newUrl = 'https://' + newUrl;
    }

    setUrl(newUrl);
    setInputUrl(newUrl);

    // Update history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newUrl);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setUrl(history[newIndex]);
      setInputUrl(history[newIndex]);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setUrl(history[newIndex]);
      setInputUrl(history[newIndex]);
    }
  };

  const handleRefresh = () => {
    setUrl(url + '?refresh=' + Date.now());
  };

  const handleHome = () => {
    const homeUrl = 'https://www.chalanagayan.me';
    setUrl(homeUrl);
    setInputUrl(homeUrl);

    // Update history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(homeUrl);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Menu Bar */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-300">
        <div className="px-2 py-1 flex gap-4 text-xs">
          <button className="hover:bg-blue-100 px-2 py-1 rounded">File</button>
          <button className="hover:bg-blue-100 px-2 py-1 rounded">Edit</button>
          <button className="hover:bg-blue-100 px-2 py-1 rounded">View</button>
          <button className="hover:bg-blue-100 px-2 py-1 rounded">Favorites</button>
          <button className="hover:bg-blue-100 px-2 py-1 rounded">Tools</button>
          <button className="hover:bg-blue-100 px-2 py-1 rounded">Help</button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-300 p-2">
        <div className="flex items-center gap-2">
          {/* Navigation Buttons */}
          <button
            onClick={handleBack}
            disabled={historyIndex <= 0}
            className="px-3 py-1 bg-gradient-to-b from-white to-gray-100 border border-gray-400 rounded hover:bg-gray-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            title="Back"
          >
            ◄
          </button>
          <button
            onClick={handleForward}
            disabled={historyIndex >= history.length - 1}
            className="px-3 py-1 bg-gradient-to-b from-white to-gray-100 border border-gray-400 rounded hover:bg-gray-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            title="Forward"
          >
            ►
          </button>
          <button
            onClick={handleRefresh}
            className="px-3 py-1 bg-gradient-to-b from-white to-gray-100 border border-gray-400 rounded hover:bg-gray-200 text-sm"
            title="Refresh"
          >
            🔄
          </button>
          <button
            onClick={handleHome}
            className="px-3 py-1 bg-gradient-to-b from-white to-gray-100 border border-gray-400 rounded hover:bg-gray-200 text-sm"
            title="Home"
          >
            🏠
          </button>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          {/* Address Bar */}
          <form onSubmit={handleNavigate} className="flex-1 flex items-center gap-2">
            <span className="text-xs text-gray-600">Address</span>
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className="flex-1 px-2 py-1 border border-gray-400 rounded focus:outline-none focus:border-blue-500 text-sm"
              placeholder="Enter URL..."
            />
            <button
              type="submit"
              className="px-3 py-1 bg-gradient-to-b from-white to-gray-100 border border-gray-400 rounded hover:bg-gray-200 text-sm"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      {/* Browser Content - iframe */}
      <div className="flex-1 relative bg-white">
        <iframe
          ref={iframeRef}
          src={url}
          key={url}
          className="w-full h-full border-0"
          title="Internet Explorer"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>

      {/* Status Bar */}
      <div className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-300 px-3 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border border-gray-400 bg-white"></div>
          <span className="text-xs text-gray-700">Done</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-700">🔒 Secured</span>
          <span className="text-xs text-gray-700">Internet</span>
        </div>
      </div>
    </div>
  );
};

export default BrowserWindow;
