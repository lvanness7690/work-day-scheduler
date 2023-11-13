$(function() {
  // Display current date in the header
  $("#currentDay").text(dayjs().format('MMMM D, YYYY'));

  // Apply past, present, or future classes
  $(".time-block").each(function() {
      let hourBlock = parseInt($(this).attr("id").split("-")[1]);
      let currentHour = dayjs().hour();

      if (hourBlock < currentHour) {
          $(this).addClass("past");
      } else if (hourBlock === currentHour) {
          $(this).addClass("present");
          $(this).removeClass("past");
      } else {
          $(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present");
      }
  });

  // Load saved data from local storage
  $(".time-block").each(function() {
      let hourBlock = $(this).attr("id");
      let eventText = localStorage.getItem(hourBlock);

      if (eventText) {
          $(this).children(".description").val(eventText);
      }
  });

  // Save data to local storage
  $(".saveBtn").on("click", function() {
      let hourBlock = $(this).parent().attr("id");
      let eventText = $(this).siblings(".description").val();

      localStorage.setItem(hourBlock, eventText);
  });
});
