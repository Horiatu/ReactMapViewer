class Panel extends React.Component {
    render() {
    	return (
    <div id="panel{name}" className="panel in">
      <div id="heading{name}" className="panel-heading">
        <div className="panel-title">
          <a className="panel-toggle collapsed" role="button" data-toggle="collapse" href="#collapseTest" aria-expanded="true" aria-controls="collapseTest">
            <span className="fontIcon" className="fontIcon">&#xe9bd;</span>
            <span className="panel-label">{name}</span></a> 
          <a className="panel-close" role="button" 
          data-toggle="collapse" tabindex="0" href="#panelTest">
          <span className="esri-icon esri-icon-close" aria-hidden="true"></span></a> -->
        </div>
      </div>
      <div id="collapseTest" className="panel-collapse in" role="tabpanel" aria-labelledby="headingTest">
        <div className="panel-body">
        </div>
      </div>
    </div>
    	);

    }
}