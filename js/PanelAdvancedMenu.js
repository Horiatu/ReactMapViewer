class PanelAdvancedMenu extends Panel {
  render() {
    return super.renderContent(
      "AdvancedMenu",
      function() {
        return (
          <div>
            <div className="top">
              <table role="presentation" className="contentTitle">
                <tbody>
                  <tr>
                    <td rowSpan="2">
                      <img src="images/logo.png" alt="Logo" />
                    </td>
                    <td className="fullTable">
                      <h1>WCAG Demo</h1>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <h2>Responsive Design</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="clearfix" />
            <div className="bottom">
              <ul className="details">
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("details")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe905;</span>
                  <span>Details</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("search")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe986;</span>
                  <span>Search</span>
                </li>

                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("language")}
                  role="button"
                >
                  <img className="details" src="images/flag.CA.22.png" alt="" />
                  <span>Language</span>
                </li>

                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("overview map")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe9ca;</span>
                  <span>Overview map</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("layer manager")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe916;</span>
                  <span>Layer Manager</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("filters")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe90f;</span>
                  <span>Filters</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("info-panel")}
                  role="button"
                >
                  <span className="details fontIcon">&#xea0c;</span>
                  <span>Info Panel</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("reverse geo-code")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe9cc;</span>
                  <span>Reverse Geocode</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("feature list")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe93d;</span>
                  <span>Feature List</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("measure")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe91e;</span>
                  <span>Measure</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("share")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe931;</span>
                  <span>Share</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("bookmarks")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe902;</span>
                  <span>Bookmarks</span>
                </li>
                <li
                  tabIndex="0"
                  onFocus={() => responsiveVoice.speak("print")}
                  role="button"
                >
                  <span className="details fontIcon">&#xe929;</span>
                  <span>Print</span>
                </li>
              </ul>
            </div>
          </div>
        );
      },
      "glyphicon-menu-hamburger",
      "Advanced Menu"
    );
  }
}
