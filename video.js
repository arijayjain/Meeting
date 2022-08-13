// replace these values with those generated in your Video API account
var apiKey = "47552721";
var sessionId = "1_MX40NzU1MjcyMX5-MTY2MDA2MDkxMTU0NH5jaitDVjNFdlhRNklhNEZUcnY5enB2NFd-fg";
var token = "T1==cGFydG5lcl9pZD00NzU1MjcyMSZzaWc9YmU2NDA3M2Y5NTFiNTNkNTc5Y2YxODM3NjM3ZDRjN2JkNGNjZjFlZDpzZXNzaW9uX2lkPTFfTVg0ME56VTFNamN5TVg1LU1UWTJNREEyTURreE1UVTBOSDVqYWl0RFZqTkZkbGhSTmtsaE5FWlVjblk1ZW5CMk5GZC1mZyZjcmVhdGVfdGltZT0xNjYwMDYwOTEyJm5vbmNlPTAuOTYzNzkyNDY0MjQ2NzgzOSZyb2xlPW1vZGVyYXRvciZleHBpcmVfdGltZT0xNjYyNjUyOTEyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();
// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'moderator', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });
  session.subscribe(stream, replacementElementId);
  session.connect(T1==cGFydG5lcl9pZD00NzU1MjcyMSZzaWc9YmU2NDA3M2Y5NTFiNTNkNTc5Y2YxODM3NjM3ZDRjN2JkNGNjZjFlZDpzZXNzaW9uX2lkPTFfTVg0ME56VTFNamN5TVg1LU1UWTJNREEyTURreE1UVTBOSDVqYWl0RFZqTkZkbGhSTmtsaE5FWlVjblk1ZW5CMk5GZC1mZyZjcmVhdGVfdGltZT0xNjYwMDYwOTEyJm5vbmNlPTAuOTYzNzkyNDY0MjQ2NzgzOSZyb2xlPW1vZGVyYXRvciZleHBpcmVfdGltZT0xNjYyNjUyOTEyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9, function (error) {
    if(error) {
        // failed to connect
    }
});
session.on('streamCreated', function(event) {
  var subscriberProperties = {insertMode: 'append'};
  var subscriber = session.subscribe(event.stream,
    'subscriberContainer',
    subscriberProperties,
    function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Subscriber added.');
      }
  });
});
session.subscribe(event.stream, 'subscriber', {insertMode: 'append'}, function (err) {
  if (err) {
    showMessage('Streaming connection failed. This could be due to a restrictive firewall.');
  }
});
session.on({
  streamDestroyed: function (event) {
    if (event.reason === 'networkDisconnected') {
      event.preventDefault();
      var subscribers = session.getSubscribersForStream(event.stream);
      if (subscribers.length > 0) {
        var subscriber = document.getElementById(subscribers[0].id);
        // Display error message inside the Subscriber
        subscriber.innerHTML = 'Lost connection. This could be due to your internet connection '
          + 'or because the other party lost their connection.';
        event.preventDefault();   // Prevent the Subscriber from being removed
      }
    }
  }
});