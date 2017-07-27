$(document).ready(function() {
  $("#datePicker")
    .datepicker({
      autoclose: true,
      format: "dd/mm/yyyy"
    })
    .on("changeDate", function(e) {
      // Revalidate the date field
      $("new_emp_form").bootstrapValidator("revalidateField", "dob");
    });
  $("#new_emp_form")
    .bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      
    feedbackIcons: {
        valid: "glyphicon glyphicon-ok",
        invalid: "glyphicon glyphicon-remove",
        validating: "glyphicon glyphicon-refresh"
      },
      fields: {
        fname: {
          validators: {
            stringLength: {
              min: 2
            },
            notEmpty: {
              message: "Please supply your name"
            }
          }
        },
        address: {
          validators: {
            stringLength: {
              min: 8
            },
            notEmpty: {
              message: "Please supply your address"
            }
          }
        },
        zip: {
          validators: {
            notEmpty: {
              message: "Please supply your zip code"
            },
            zipCode: {
              country: "IN",
              message: "Please supply a vaild zip code"
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: "Please supply your email address"
            },
            emailAddress: {
              message: "Please supply a valid email address"
            }
          }
        },
        phone: {
          validators: {
            notEmpty: {
              message: "Please supply your phone number"
            },
            phone: {
              country: "IN",
              message: "Please supply a vaild phone number"
            }
          }
        },

        dob: {
          validators: {
            date: {
              format: "DD/MM/YYYY",
              message: "The format is dd/mm/yyyy"
              },
            notEmpty: {
              message: 'The field can not be empty'
            }
          }
        },
        address: {
          validators: {
            stringLength: {
              min: 8
            },
            notEmpty: {
              message: "Please supply your address"
            }
          }
        },
        dAmount: {
          validators: {
            notEmpty: {
              message: "Please select any of the options"
            }
          }
        },
        cause: {
          validators: {
            notEmpty: {
              message: "Please select your cause"
            }
          }
        }
      }
    })
    .on("success.form.bv", function(e) {
      $("#success_message").slideDown({ opacity: "show" }, "slow"); // Do something ...
      $("#new_emp_form").data("bootstrapValidator").resetForm();

      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data("bootstrapValidator");

      // Use Ajax to submit form data
      $.post(
        $form.attr("action"),
        $form.serialize(),
        function(result) {
          console.log(result);
        },
        "json"
      );
    });
});
