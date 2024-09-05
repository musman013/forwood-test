;(function() { 
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global; 

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self; 

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

var _, tipoHandle;

var tipoCustomScript = {};


tipoCustomScript.initialize = function (handle, lodash) {
    tipoHandle = handle;
    _ = lodash;
}
//___SampleChecklist___

 tipoCustomScript.SampleChecklist_list_start_checklist = function(data_handle) {
tipoHandle.toTipo('create', data_handle.tipo_name);
}


//___SampleChecklist___
//___Assets___

 tipoCustomScript.Assets_list_start_service = function(data_handle) {
console.log(data_handle);
data_handle.additional_tipo.tipo_id = Math.floor(Math.random() * 1000000000);
data_handle.additional_tipo.status = 'Submitted';
data_handle.additional_tipo.created_by = tipoHandle.user_meta.user_attributes.user_tipo_id;
data_handle.additional_tipo.list_of_assets = data_handle.selected_tipo_ids;
data_handle.additional_tipo.list_of_assets_labels = data_handle.selected_tipo_ids;
var actions = [{
        action_name: 'approve',
        label: 'Approve',
        type: 'ClientCall'
    },{
    action_name: 'reject',
        label: 'Reject',
        type: 'ClientCall'
    }];
tipoHandle.createTipo('Service', data_handle.additional_tipo).then(function(){
    console.log('save completeeed');
    tipoHandle.getTipo('Worker',tipoHandle.user_meta.user_attributes.user_tipo_id).then(function(details){ 
    console.log('push notifica', details);
    var imageurl = null;
    if(details.personal_details && details.personal_details.profile_pic) {
        imageurl = tipoHandle.application_meta.TipoConfiguration.aws_settings.s3_url + "/" + tipoHandle.application_meta.TipoConfiguration.aws_settings.upload_bucket + '/g/tipotapp/tipoappbase/' + details.personal_details.profile_pic.key;
    } 
    tipoHandle.getTipo('Supervisor',data_handle.additional_tipo.supervisor_assigned).then(function(supervisor){
        tipoHandle.sendPushNotification('New Approval', 'Hi ' + supervisor.personal_details.name +  ', You have a new task to Approve from ' + details.personal_details.name ,supervisor.personal_details.email
    , 'Service'
    , data_handle.additional_tipo.tipo_id,'Home',undefined, actions , imageurl)
    });
    });
});
}


//___Assets___
//___TipoDefinition___

 tipoCustomScript.TipoDefinition_tipo_meta_tipo_type_copy_OnChange  = function(data_handle) {
var trigger;
}

 tipoCustomScript.TipoDefinition_tipo_fields_element_style_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_fields_label_style_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_fields_value_style_OnChange  = function(data_handle) {
console.log('On Change');
}

 tipoCustomScript.TipoDefinition_tipo_fields_class_support_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_fields_element_class_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_fields_label_class_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_fields_value_class_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_fields_visibility_expression_OnChange  = function(data_handle) {
console.log('onchange');
}

 tipoCustomScript.TipoDefinition_tipo_fields_validations_OnChange  = function(data_handle) {
console.log('On Change');
}

 tipoCustomScript.TipoDefinition_tipo_fields_input_pattern_OnChange  = function(data_handle) {
console.log('On Change');
}

 tipoCustomScript.TipoDefinition_tipo_fields_relationship_filter_OnChange  = function(data_handle) {
console.log('On Change');
}

 tipoCustomScript.TipoDefinition_tipo_fields_expression_OnChange  = function(data_handle) {
console.log('test')
}

 tipoCustomScript.TipoDefinition_tipo_menu_type__OnChange  = function(data_handle) {
var trigger;
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_element_style_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_label_style_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_value_style_OnChange  = function(data_handle) {
console.log('On Change');
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_class_support_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_element_class_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_label_class_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_value_class_OnChange  = function(data_handle) {
if (data_handle.label === "Value Based Style") {
         if (data_handle.context.allowed_values) {
           var expression = "";
           _.each(data_handle.context.allowed_values,function(value){
             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
             }else{
               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
             }
           });
           data_handle.new_value = expression;
         };
       };
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_visibility_expression_OnChange  = function(data_handle) {
console.log('onchange');
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_validations_OnChange  = function(data_handle) {
console.log('On Change');
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_input_pattern_OnChange  = function(data_handle) {
console.log('On Change');
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_relationship_filter_OnChange  = function(data_handle) {
console.log('On Change');
}

 tipoCustomScript.TipoDefinition_tipo_field_groups_tipo_fields_expression_OnChange  = function(data_handle) {
console.log('test')
}

//___TipoDefinition___
//___Service___

 tipoCustomScript.Service_detail_reject = function(data_handle) {
data_handle.selected_tipo.status = 'Rejected';
tipoHandle.saveTipo('Service',data_handle.selected_tipo.tipo_id, data_handle.selected_tipo).then( function() {
    tipoHandle.showMessage('Confirmation', 'Form has been Rejected');
    if(tipoHandle.user_meta.tipo_id  !== data_handle.selected_tipo.created_by ) {
        sendNotification();
    }
    tipoHandle.toTipo('list','Service');
});

function sendNotification() {
      console.log('+++++++++++++++++++', tipoHandle.user_meta.user_attributes.user_tipo_id);
    tipoHandle.getTipo('Supervisor', tipoHandle.user_meta.user_attributes.user_tipo_id).then(function(supervisor){
   tipoHandle.getTipo('Worker', data_handle.selected_tipo.created_by).then(function(details){ 
    console.log('push notifica', details);
    var imageurl = null;
    if(supervisor.personal_details && supervisor.personal_details.profile_pic) {
        imageurl = tipoHandle.application_meta.TipoConfiguration.aws_settings.s3_url + "/" + tipoHandle.application_meta.TipoConfiguration.aws_settings.upload_bucket + '/g/tipotapp/tipoappbase/' + supervisor.personal_details.profile_pic.key;
     }
   tipoHandle.sendPushNotification('Journey Rejected'
    , 'A Journey request you submitted has been rejected because ,'+ data_handle.additional_tipo.reason, details.personal_details.email
    , 'Service'
    , data_handle.selected_tipo.tipo_id,'Home',undefined, null 
    , imageurl);
   });
   });
  }
}


 tipoCustomScript.Service_detail_approve = function(data_handle) {
data_handle.selected_tipo.status = 'Approved';
tipoHandle.saveTipo('Service',data_handle.selected_tipo.tipo_id, data_handle.selected_tipo).then( function() {
    tipoHandle.showMessage('Confirmation', 'Form has been approved');
    if(tipoHandle.user_meta.tipo_id  !== data_handle.selected_tipo.created_by ) {
       sendNotification();
    }
    tipoHandle.toTipo('list','Service');
});

function sendNotification() {
      console.log('+++++++++++++++++++', tipoHandle.user_meta.user_attributes.user_tipo_id);
   tipoHandle.getTipo('Supervisor', tipoHandle.user_meta.user_attributes.user_tipo_id).then(function(supervisor){
   tipoHandle.getTipo('Worker',data_handle.selected_tipo.created_by).then(function(details){ 
    console.log('push notifica', details);
    var imageurl = null;
    if(supervisor.personal_details && supervisor.personal_details.profile_pic) {
        imageurl = tipoHandle.application_meta.TipoConfiguration.aws_settings.s3_url + "/" + tipoHandle.application_meta.TipoConfiguration.aws_settings.upload_bucket + '/g/tipotapp/tipoappbase/' + supervisor.personal_details.profile_pic.key;
    }
   tipoHandle.sendPushNotification('Journey Approved'
    , 'A Journey request you submitted has been approved. To view the details, please follow the prompts.', data_handle.selected_tipo.created_by
    , 'Service'
    , data_handle.selected_tipo.tipo_id,'Home',undefined, null 
    , imageurl);
   });
   });
  }
}


 tipoCustomScript.Service_detail_completed = function(data_handle) {
data_handle.selected_tipo.status = 'Completed';
tipoHandle.saveTipo('Service',data_handle.selected_tipo.tipo_id, data_handle.selected_tipo).then( function() {
    tipoHandle.showMessage('Confirmation', 'Journey has been Completed');
    if(tipoHandle.user_meta.tipo_id  !== data_handle.selected_tipo.created_by ) {
       sendNotification();
    }
    tipoHandle.toTipo('list','Service');
});

function sendNotification() {
      console.log('+++++++++++++++++++', tipoHandle.user_meta.user_attributes.user_tipo_id);
   tipoHandle.getTipo('Supervisor', data_handle.selected_tipo.supervisor_assigned).then(function(supervisor){
   tipoHandle.getTipo('Worker',tipoHandle.user_meta.user_attributes.user_tipo_id).then(function(details){ 
    console.log('push notifica', details);
    var imageurl = null;
    if(details.personal_details && details.personal_details.profile_pic) {
        imageurl = tipoHandle.application_meta.TipoConfiguration.aws_settings.s3_url + "/" + tipoHandle.application_meta.TipoConfiguration.aws_settings.upload_bucket + '/g/tipotapp/tipoappbase/' + details.personal_details.profile_pic.key;
    }
   tipoHandle.sendPushNotification('Journey Completed'
    , 'A Journey has been completed by' + details.personal_details.name + '. To view the details, please follow the prompts.', supervisor.personal_details.email
    , 'Service'
    , data_handle.selected_tipo.tipo_id,'Home',undefined, null 
    , imageurl);
   });
   });
  }
}


//___Service___
//___Worker___

 tipoCustomScript.Worker_list_invite = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    tipoHandle.inviteUser("Worker", value.tipo_id, value.personal_details.name, value.personal_details.email, "Worker" ).then(function(success){
        value.personal_details.invited = true;
        tipoHandle.saveTipo("Worker",value.tipo_id,value);
    }, function(error){
        console.log(error);
    })
})
console.log('successful');
return true;
}


//___Worker___
//___Supervisor___

 tipoCustomScript.Supervisor_list_invite = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    tipoHandle.inviteUser("Supervisor", value.tipo_id, value.personal_details.name, value.personal_details.email, "Supervisor" ).then(function(success){
        value.personal_details.invited = true;
        tipoHandle.saveTipo("Supervisor",value.tipo_id,value);
    }, function(error){
        console.log(error);
    })
})
console.log('successful');
return true;
}


//___Supervisor___
//___TipoApp___

 tipoCustomScript.TipoApp_detail_start_tour = function(data_handle) {
var introOptions = {
						        steps:[
						        {
						            element: '#manageTipos',
						            intro: "Start creating objects here"
						        },
						        {
						            element: '#manageMenus',
						            intro: "Create Menus and associate with objects here",
						            position: 'right'
						        },
						        {
						            element: '#home_menu',
						            intro: 'Access Home Page',
						            position: 'bottom'
						        },
						        {
						            element: '#develop_menu',
						            intro: "In develop Mode",
						            position: 'bottom'
						        }
						        ],
						        showStepNumbers: false,
						        showBullets: false,
						        exitOnOverlayClick: true,
						        exitOnEsc:true,
						        nextLabel: 'next',
						        prevLabel: '<span style="color:green">Previous</span>',
						        skipLabel: 'Dont Show the Tour Again',
						        doneLabel: 'Finish'
						    };
		var tour_item = "tipoapp_tour_1";
                tipoHandle.setTourObject(tour_item,introOptions);
}


 tipoCustomScript.TipoApp_detail_gitpull = function(data_handle) {
/*


Basic Lodash Loop
Documentation Link for Lodash https://lodash.com/docs

_.each({ "a": 1, "b": 2 }, function(value, key) {
  console.log(key);
});
_.each([1, 2], function(value) {
  console.log(value);
});

Handling Promises with TipoHandle

tipoHandle.getTipos("Application").then(function(tipos){
  data_handle.tipo.new_applications = _.filter(tipos,function(tipo){ return tipo.application_status === "New"});
})


Initalization
var c = 1;
var b = 2;
*/

console.log('hi');
}

//___TipoApp___
//___Person___

 tipoCustomScript.Person_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.designation);
    tipoHandle.inviteUser('Person1', value.tipo_id, value.display_name, value.email, value.designation).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
    });
console.log('Action Clicked');
return true;
}


 tipoCustomScript.Person_detail_change_role = function(data_handle) {
return true;
}


//___Person___
//___PersonTest___

 tipoCustomScript.PersonTest_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.designation);
    tipoHandle.inviteUser('Person', value.tipo_id, value.display_name, value.email, value.designation).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
});
    console.log('Action Clicked');
return true;
}


 tipoCustomScript.PersonTest_detail_promote = function(data_handle) {
return true;
}


//___PersonTest___
//___WorkerTest___

 tipoCustomScript.WorkerTest_list_invite = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    tipoHandle.inviteUser("WorkerTest", value.tipo_id, value.name, value.email, "TestRole" ).then(function(success){
        value.invited = true;
        tipoHandle.saveTipo("WorkerTest",value.tipo_id,value);
    }, function(error){
        console.log(error);
    })
})
console.log('successful');
return true;

}


//___WorkerTest___
//___Person1___

 tipoCustomScript.Person1_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.designation);
    tipoHandle.inviteUser('Person1', value.tipo_id, value.display_name, value.email, value.designation).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
    });
console.log('Action Clicked');
return true;
}


 tipoCustomScript.Person1_detail_change_role = function(data_handle) {
return true;
}


//___Person1___
//___Incident___

 tipoCustomScript.Incident_PostServerSave  = function(data_handle) {
console.log('POST Server = ' + JSON.stringify(data_handle));
var notification_title = '';
var notification_message = '';
var notification_object = {};
var to = []; // can be an array
var responsible_person ;
if(tipoHandle.user_meta.role === 'Contractor'){
    responsible_person = data_handle.tipo.reporting_details.responsible_person_contractor;
} else {
    responsible_person = data_handle.tipo.reporting_details.responsible_person
}
var person_to_notify = '';
var notification_required = false;
var notify_more_people = data_handle.tipo.reporting_details.notify_more;
var incident_type = data_handle.tipo.about_the_incident.incident_type;
var actual_severity = '';
if(incident_type === 'Incident'){
    actual_severity = data_handle.tipo.incident_details.actual_severity ;
}
console.log('incident type = ' + incident_type);
switch(data_handle.tipo.reporting_details.status){
    case 'Submitted':  
            if(data_handle.mode === 'create') { 
                actual_severity = 'hi';
                if(incident_type === 'Near miss' || actual_severity.includes('No') || actual_severity.includes('Insignificant')){
                notification_object['notification_title'] = 'Incident with less risk from ' + data_handle.response.created_by_labels + '!';
                notification_object['notification_message'] = 'No need of investigation.Set the POTENTIAL SEVERITY and close the incident?';
                } else {
                notification_object['notification_title'] = 'MEDIUM/HIGH Risk Incident Alert from ' + data_handle.response.created_by_labels + '!!!!!';
                notification_object['notification_message'] = 'Investigation required. Please click to set POTENTIAL SEVERITY and assign a Investigator';
                }
                notification_object['person_to_notify'] = responsible_person;
                to.push(notification_object);
                if(notify_more_people === 'Yes'){
                        console.log('in notify more block');
                        data_handle.tipo.reporting_details.select_more.forEach(function(element){
                            notification_object['notification_title'] = 'Incident ALERT from '+ data_handle.tipo.created_by_labels + '!';
                            notification_object['notification_message'] = 'Have a look ?'; 
                            notification_object['person_to_notify'] = element;
                            to.push(notification_object);
                        });
                }
            }
                break;
    case 'Under-Investigation': 
                        if(data_handle.old_tipo.reporting_details.status === 'Submitted'){  
                        notification_object['notification_title'] =  data_handle.response.updated_by_labels + ' has assigned an incident to you for investigation. ';
                        notification_object['notification_message'] =  ' Simple investigation needs to be undertaken to understand how it occurred and what should be done to prevent re-occurrence. Please do check.'
                        notification_object['person_to_notify'] = data_handle.tipo.investigation_details.investigator_name;
                        console.log('Investigator Name = = = ' + notification_object['person_to_notify'] );
                        if(notification_object['person_to_notify']){
                        to.push(notification_object);
                        }
                        }
                        break;
                        
    case 'Resolved':   if(data_handle.old_tipo.reporting_details.status === 'Under-Investigation'){
                        notification_object['notification_message'] = data_handle.tipo.investigation_details.investigator_name_labels + 'has completed investigation of Incident number ' + data_handle.tipo.tipo_id + '. Please review and close the incident.';
                        notification_object['notification_title'] = 'Investigation Completed';
                        notification_object['person_to_notify'] = responsible_person;
                        to.push(notification_object);
                        }
                        break;

                    
    case 'Closed': if(data_handle.old_tipo.reporting_details.status !== 'Closed'){
                    notification_object['notification_title'] =' Your incident with ID '+ data_handle.tipo.tipo_id + ' is closed now!';
                    notification_object['notification_message'] = '' + data_handle.response.updated_by_labels + ' closed the incident with few comments. Please click here to have a look.';
                    notification_object['person_to_notify'] = data_handle.tipo.reporting_details._submitted_by_;
                    to.push(notification_object);
                    break;
    }
}


to.forEach(function(element) {
    console.log('in push notification from event = ' + element.person_to_notify);
    tipoHandle.getTipo('Staff',element.person_to_notify).then(function(details){

        tipoHandle.sendPushNotification(element.notification_title, element.notification_message, details.email
        , data_handle.tipo_name, data_handle.tipo.tipo_id,'Home','view',null,'');

    });
});
}

 tipoCustomScript.Incident_OnSave  = function(data_handle) {
console.log('DATA HANDLE = ' + JSON.stringify(data_handle));
console.log(' tipo_id = ' + data_handle.tipo.tipo_id );

if(tipoHandle.user_meta.role === 'Manager') {
   
        if( data_handle.tipo.final_comments_group.close_this_incident_){
             console.log('in manager role close incident block');
            data_handle.tipo.reporting_details.status = 'Closed';  
                      
        }
}
switch(data_handle.tipo.reporting_details.status){
    case '':    data_handle.tipo.reporting_details._submitted_by_ = tipoHandle.user_meta.email;
                data_handle.tipo.reporting_details.status = 'Submitted';
                break;
    case 'Submitted': if(data_handle.mode !== 'create'){ data_handle.tipo.reporting_details.status = 'Under-Investigation'};
                        break;
    case 'Under-Investigation': if(data_handle.tipo.investigation_details.completed_investigation_ === 'Yes')
                                {
                                    data_handle.tipo.reporting_details.status = 'Resolved';
                                }
                                break;
}
}

//___Incident___
//___TipoCustomization___

 tipoCustomScript.TipoCustomization_appearance_settings_theme_colour_primary_OnChange  = function(data_handle) {
var init;
}

 tipoCustomScript.TipoCustomization_appearance_settings_primary_colour_palette_OnChange  = function(data_handle) {
var init;
}

 tipoCustomScript.TipoCustomization_appearance_settings_app_level_styling_BeforeLookup = function(data_handle) {
console.log(data_handle);
}

//___TipoCustomization___
//___Person2___

 tipoCustomScript.Person2_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.designation);
    tipoHandle.inviteUser('Person1', value.tipo_id, value.display_name, value.email, value.designation).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
    });
console.log('Action Clicked');
return true;
}


 tipoCustomScript.Person2_detail_change_role = function(data_handle) {
return true;
}


//___Person2___
//___Staff___

 tipoCustomScript.Staff_list_notify = function(data_handle) {
console.log('First line');
console.log(data_handle);
_.each( data_handle.selected_tipos, function(value){
    console.log('Selected email = ' + value.email);
    console.log('Selected record id = ' + value.tipo_id);
    tipoHandle.sendPushNotification('Testing pushnotifications',data_handle.additional_tipo.title + '' + data_handle.additional_tipo.text ,value.email,
       'Staff',value.tipo_id,'Home','view',null,'');   
});
console.log('LAST LINE');
}


 tipoCustomScript.Staff_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.role);
    tipoHandle.inviteUser('Staff', value.tipo_id, value.display_name, value.email, value.role).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
    });
console.log('Action Clicked');
return true;
}


 tipoCustomScript.Staff_detail_change_role = function(data_handle) {
return true;
}


//___Staff___
//___Contractor___

 tipoCustomScript.Contractor_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.designation);
    tipoHandle.inviteUser('Person1', value.tipo_id, value.display_name, value.email, value.designation).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
    });
console.log('Action Clicked');
return true;
}


 tipoCustomScript.Contractor_detail_change_role = function(data_handle) {
return true;
}


//___Contractor___
//___CodingExample___

 tipoCustomScript.CodingExample_list_user_contex = function(data_handle) {
console.log( tipoHandle.user_meta );
}


 tipoCustomScript.CodingExample_list_multi_select = function(data_handle) {
console.log('data_handle', data_handle);

_.each(data_handle.selected_tipos, function(value){
    console.log('Each tipo ',value);
});
}


 tipoCustomScript.CodingExample_list_single_select = function(data_handle) {
console.log('data_handle', data_handle);

console.log('Each tipo ',data_handle.selected_tipos[0]);

console.log('All tipos. should error ',data_handle.selected_tipos);

}


//___CodingExample___
//___Action___

 tipoCustomScript.Action_OnSave  = function(data_handle) {
if( data_handle.mode === 'create' ) {
    data_handle.tipo.scheduler.reminder_schedule.remind_before_ = ['7'];
    data_handle.tipo.scheduler.reminder_schedule.time = '12:40 PM';
    data_handle.tipo.status = data_handle.tipo.status || 'Assigned';
    data_handle.tipo.remind_after_due_date = true;
    data_handle.tipo.remind_before_due_date = true;
    data_handle.tipo.send_push_notification = true;
    data_handle.tipo.scheduler.notification.notification_title = '$tipo.task_name';
    data_handle.tipo.scheduler.notification.notification_message = '$tipo.description';
    data_handle.tipo.scheduled_action = false;
    data_handle.tipo.time_zone = tipoHandle.getTimeZone();
    const due_date = data_handle.tipo.due_date;
    const day = tipoHandle.getDateUtil(due_date).format('dddd');
    data_handle.tipo.scheduler.reminder_schedule.schedule.repeat_every = 'Week';
    data_handle.tipo.scheduler.reminder_schedule.schedule.repeat_on = [day];
    data_handle.tipo.scheduler.reminder_schedule.schedule.time = '12:40 PM';
    data_handle.tipo.scheduler.reminder_schedule.notifications_before_due_date.notification_title = '$tipo.task_name';
    data_handle.tipo.scheduler.reminder_schedule.notifications_before_due_date.notification_message = '$tipo.description';
    data_handle.tipo.scheduler.reminder_schedule.notifications_post_due_date.notification_title = '$tipo.task_name';
    data_handle.tipo.scheduler.reminder_schedule.notifications_post_due_date.notification_message = '$tipo.description';
}
}

 tipoCustomScript.Action_detail_close = function(data_handle) {
console.log(data_handle);
data_handle.selected_tipo.status = 'Closed';
data_handle.selected_tipo.close_comments = data_handle.additional_tipo.close_comments;
tipoHandle.updateTipo('Action', data_handle.selected_tipo.tipo_id, data_handle.selected_tipo);
tipoHandle.sendPushNotification('Successfully closed', 
                                'Action is closed successfully',
                                data_handle.selected_tipo.assign_to_user,
                                'Action',
                                data_handle.selected_tipo.tipo_id,
                                'Home',
                                'view');

return true;
}


 tipoCustomScript.Action_detail_complete = function(data_handle) {
console.log(data_handle);
data_handle.selected_tipo.status = 'Completed';
data_handle.selected_tipo.progress_notes = data_handle.additional_tipo.notes;
tipoHandle.updateTipo('Action', data_handle.selected_tipo.tipo_id, data_handle.selected_tipo);
if(data_handle.selected_tipo.person_to_close) {
    tipoHandle.sendPushNotification('Close the Action', 
                                    'Action is completed, waiting for reviewing the action and close it',
                                    data_handle.selected_tipo.person_to_close,
                                    'Action',
                                    data_handle.selected_tipo.tipo_id,
                                    'Home',
                                    'view');
}

return true;
}


//___Action___
//___ScheduleAction___

 tipoCustomScript.ScheduleAction_OnSave  = function(data_handle) {
if( data_handle.mode === 'create' ) {
    data_handle.tipo.scheduler.reminder_schedule.remind_before_ = ['7'];
    data_handle.tipo.scheduler.reminder_schedule.time = '8:00 AM';
    data_handle.tipo.remind_after_due_date = true;
    data_handle.tipo.remind_before_due_date = true;
    data_handle.tipo.send_push_notification = true;
    data_handle.tipo.scheduler.notification.notification_title = '$tipo.task_name';
    data_handle.tipo.scheduler.notification.notification_message = '$tipo.description';
    const due_date = data_handle.tipo.due_date;
    const day = tipoHandle.getDateUtil(due_date).format('dddd');
    data_handle.tipo.scheduled_action = true;
    data_handle.tipo.time_zone = tipoHandle.getTimeZone();
    data_handle.tipo.scheduler.reminder_schedule.schedule.repeat_every = 'Week';
    data_handle.tipo.scheduler.reminder_schedule.schedule.repeat_on = [day];
    data_handle.tipo.scheduler.reminder_schedule.schedule.time = '8:00 AM';
    data_handle.tipo.scheduler.reminder_schedule.notifications_before_due_date.notification_title = '$tipo.task_name';
    data_handle.tipo.scheduler.reminder_schedule.notifications_before_due_date.notification_message = '$tipo.description';
    data_handle.tipo.scheduler.reminder_schedule.notifications_post_due_date.notification_title = '$tipo.task_name';
    data_handle.tipo.scheduler.reminder_schedule.notifications_post_due_date.notification_message = '$tipo.description';
}
}

//___ScheduleAction___
//___TestUser___

 tipoCustomScript.TestUser_OnCreate  = function(data_handle) {
console.log('hi');
}

//___TestUser___
//___UserTask___

 tipoCustomScript.UserTask_OnCreate  = function(data_handle) {
console.log('hi');
}

//___UserTask___
//___Incident2___

 tipoCustomScript.Incident2_PostServerSave  = function(data_handle) {
console.log('POST Server = ' + JSON.stringify(data_handle));
var notification_title = '';
var notification_message = '';
var notification_object = {};
var to = []; // can be an array
var potential_severity = data_handle.tipo.reporting_details.potential_severity ;
// var risk_level_ = data_handle.response.risk_level;
var responsible_person ;
if(tipoHandle.user_meta.role === 'Contractor'){
    responsible_person = data_handle.tipo.reporting_details.responsible_person_contractor;
} else {
     responsible_person = data_handle.tipo.reporting_details.responsible_person;
}
var person_to_notify = '';
var notification_required = false;
var notify_more_people = data_handle.tipo.reporting_details.notify_more;
var incident_type = data_handle.tipo.about_the_incident.incident_type;
console.log('incident type = ' + incident_type);
switch(data_handle.tipo.reporting_details.status){
    case 'Submitted':  
            if(data_handle.mode === 'create') { 
                potential_severity = 'hi';
                if(incident_type === 'Near miss' || potential_severity.includes('No') || potential_severity.includes('Insignificant')){
                notification_object['notification_title'] = 'Incident with less risk from ' + data_handle.response.created_by_labels + '!';
                notification_object['notification_message'] = 'No need of investigation.Set the POTENTIAL SEVERITY and close the incident?';
                } else {
                notification_object['notification_title'] = 'MEDIUM/HIGH Risk Incident Alert from ' + data_handle.response.created_by_labels + '!!!!!';
                notification_object['notification_message'] = 'Investigation required. Please click to set POTENTIAL SEVERITY and assign a Investigator';
                }
                notification_object['person_to_notify'] = responsible_person;
                to.push(notification_object);
                if(notify_more_people === 'Yes'){
                        console.log('in notify more block');
                        data_handle.tipo.reporting_details.select_more.forEach(function(element){
                            notification_object['notification_title'] = 'Incident ALERT from '+ data_handle.tipo.created_by_labels + '!';
                            notification_object['notification_message'] = 'Have a look ?'; 
                            notification_object['person_to_notify'] = element;
                            to.push(notification_object);
                        });
                }
            }
                break;
    case 'Under-Investigation': 
                        if(data_handle.old_tipo.reporting_details.status === 'Submitted'){  
                        notification_object['notification_title'] =  data_handle.tipo.reporting_details.responsible_person_labels.replace('@mailinator.com','') + ' has assigned an incident to you for investigation. ';
                        notification_object['notification_message'] =  ' Simple investigation needs to be undertaken to understand how it occurred and what should be done to prevent re-occurrence. Please do check.'
                        notification_object['person_to_notify'] = data_handle.tipo.investigation_details.investigator_name;
                        to.push(notification_object);
                        }
                        break;
                        
    case 'Resolved':   if(data_handle.old_tipo.reporting_details.status === 'Under-Investigation'){
                        notification_object['notification_message'] = data_handle.tipo.investigation_details.investigator_name_labels + 'has completed investigation of Incident number ' + data_handle.tipo.tipo_id + '. Please review and close the incident.';
                        notification_object['notification_title'] = 'Investigation Completed';
                        notification_object['person_to_notify'] = responsible_person;
                        to.push(notification_object);
                        }
                        break;

                    
    case 'Closed': if(data_handle.old_tipo.reporting_details.status !== 'Closed'){
                    notification_object['notification_title'] =' Your incident with ID '+ data_handle.tipo.tipo_id + ' is closed now!';
                    notification_object['notification_message'] = '' + data_handle.response.updated_by_labels + ' closed the incident with few comments. Please click here to have a look.';
                    notification_object['person_to_notify'] = data_handle.tipo.reporting_details._submitted_by_;
                    to.push(notification_object);
                    break;
    }
}


to.forEach(function(element) {
    console.log('in push notification from event = ' + element.person_to_notify);
    tipoHandle.sendPushNotification(element.notification_title, element.notification_message, element.person_to_notify
, data_handle.tipo_name, data_handle.tipo.tipo_id,'Home','view',null,'');
});

}

 tipoCustomScript.Incident2_OnSave  = function(data_handle) {
console.log('DATA HANDLE = ' + JSON.stringify(data_handle));
console.log(' tipo_id = ' + data_handle.tipo.tipo_id );

if(tipoHandle.user_meta.role === 'Manager') {
   
        if( data_handle.tipo.final_comment_group.close_this_incident_){
             console.log('in manager role close incident block');
            data_handle.tipo.reporting_details.status = 'Closed';  
                      
        }
}
switch(data_handle.tipo.reporting_details.status){
    case '':    data_handle.tipo.reporting_details._submitted_by_ = tipoHandle.user_meta.email;
                data_handle.tipo.reporting_details.status = 'Submitted';
                break;
    case 'Submitted': if(data_handle.mode !== 'create'){ data_handle.tipo.reporting_details.status = 'Under-Investigation'};
                        break;
    case 'Under-Investigation': if(data_handle.tipo.investigation_details.completed_investigation_ === 'Yes')
                                {
                                    data_handle.tipo.reporting_details.status = 'Resolved';
                                }
                                break;
}

 

}

//___Incident2___
//___Tabviewedit___

 tipoCustomScript.Tabviewedit_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.designation);
    tipoHandle.inviteUser('Staff', value.tipo_id, value.display_name, value.email, value.designation).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
    });
console.log('Action Clicked');
return true;
}


 tipoCustomScript.Tabviewedit_detail_change_role = function(data_handle) {
return true;
}


//___Tabviewedit___
//___Staffcheckadd___

 tipoCustomScript.Staffcheckadd_list_notify = function(data_handle) {
console.log(data_handle);
console.log('data handle');

/** tipoHandle.saveTipo('PushNotification', data) 
 * tipoHandle.sendPushNotification();
 */
}


 tipoCustomScript.Staffcheckadd_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.designation);
    tipoHandle.inviteUser('Staff', value.tipo_id, value.display_name, value.email, value.designation).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
    });
console.log('Action Clicked');
return true;
}


 tipoCustomScript.Staffcheckadd_detail_change_role = function(data_handle) {
return true;
}


//___Staffcheckadd___
//___StaffMaps___

 tipoCustomScript.StaffMaps_list_notify = function(data_handle) {
console.log(data_handle);
console.log('data handle');

/** tipoHandle.saveTipo('PushNotification', data) 
 * tipoHandle.sendPushNotification();
 */
}


 tipoCustomScript.StaffMaps_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.designation);
    tipoHandle.inviteUser('Staff', value.tipo_id, value.display_name, value.email, value.designation).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
    });
console.log('Action Clicked');
return true;
}


 tipoCustomScript.StaffMaps_detail_change_role = function(data_handle) {
return true;
}

//___StaffMaps___
//___TipoVideoTutorials___

 tipoCustomScript.TipoVideoTutorials_OnSave  = function(data_handle) {
/*


Basic Lodash Loop
Documentation Link for Lodash https://lodash.com/docs

_.each({ "a": 1, "b": 2 }, function(value, key) {
  console.log(key);
});
_.each([1, 2], function(value) {
  console.log(value);
});

Handling Promises with TipoHandle

tipoHandle.getTipos("Application").then(function(tipos){
  data_handle.tipo.new_applications = _.filter(tipos,function(tipo){ return tipo.application_status === "New"});
})


Initalization
var c = 1;
var b = 2;
*/

console.log('testing customscript');
}

//___TipoVideoTutorials___
//___OnBoardingProcessExample___

 tipoCustomScript.OnBoardingProcessExample_list_mark_as_done = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){

    console.log('selected tipo =' + value);    
    value.status = 'Done';
    tipoHandle.updateTipo('OnBoardingProcessExample', value.tipo_id, value).then(
            function(success){
                tipoHandle.showMessage('Successfully updated.');         
        }, function(error){
            tipoHandle.showMessage(error);
        });

        });


return true;
}


//___OnBoardingProcessExample___
//___OnBoardingProcessExample_Worker___

 tipoCustomScript.OnBoardingProcessExample_Worker_list_mark_as_done = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){

    console.log('selected tipo =' + value);    
    value.status = 'Done';
    tipoHandle.updateTipo('OnBoardingProcessExample', value.tipo_id, value).then(
            function(success){
                tipoHandle.showMessage('Successfully updated.');         
        }, function(error){
            tipoHandle.showMessage(error);
        });

        });


return true;
}


//___OnBoardingProcessExample_Worker___
//___QuestionsBank___

 tipoCustomScript.QuestionsBank_OnSave  = function(data_handle) {
data_handle['tipo'][data_handle.tipo.question_key_word] = data_handle.tipo.question_text
}

 tipoCustomScript.QuestionsBank_list_export_data = function(data_handle) {
tipoHandle.presentTipoForm('Export data', 'TipoExportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


 tipoCustomScript.QuestionsBank_list_import_data = function(data_handle) {
tipoHandle.presentTipoForm('Import data', 'TipoImportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


//___QuestionsBank___
//___ValeActionPlan___

 tipoCustomScript.ValeActionPlan_OnSave  = function(data_handle) {
if( data_handle.mode === 'create' ) {
    data_handle.tipo.scheduler.reminder_schedule.remind_before_ = ['7'];
    data_handle.tipo.scheduler.reminder_schedule.time = '12:40 PM';
    data_handle.tipo.status = data_handle.tipo.status || 'Assigned';
    data_handle.tipo.remind_after_due_date = true;
    data_handle.tipo.remind_before_due_date = true;
    data_handle.tipo.send_push_notification = true;
    data_handle.tipo.scheduler.notification.notification_title = '$tipo.task_name';
    data_handle.tipo.scheduler.notification.notification_message = '$tipo.description';
    data_handle.tipo.scheduled_action = false;
    data_handle.tipo.time_zone = tipoHandle.getTimeZone();
    const due_date = data_handle.tipo.due_date;
    const day = tipoHandle.getDateUtil(due_date).format('dddd');
    data_handle.tipo.scheduler.reminder_schedule.schedule.repeat_every = 'Week';
    data_handle.tipo.scheduler.reminder_schedule.schedule.repeat_on = [day];
    data_handle.tipo.scheduler.reminder_schedule.schedule.time = '12:40 PM';
    data_handle.tipo.scheduler.reminder_schedule.notifications_before_due_date.notification_title = '$tipo.task_name';
    data_handle.tipo.scheduler.reminder_schedule.notifications_before_due_date.notification_message = '$tipo.description';
    data_handle.tipo.scheduler.reminder_schedule.notifications_post_due_date.notification_title = '$tipo.task_name';
    data_handle.tipo.scheduler.reminder_schedule.notifications_post_due_date.notification_message = '$tipo.description';
}
}

 tipoCustomScript.ValeActionPlan_detail_close = function(data_handle) {
console.log(data_handle);
data_handle.selected_tipo.status = 'Closed';
data_handle.selected_tipo.close_comments = data_handle.additional_tipo.close_comments;
tipoHandle.updateTipo('Action', data_handle.selected_tipo.tipo_id, data_handle.selected_tipo);
tipoHandle.sendPushNotification('Successfully closed', 
                                'Action is closed successfully',
                                data_handle.selected_tipo.assign_to_user,
                                'Action',
                                data_handle.selected_tipo.tipo_id,
                                'Home',
                                'view');

return true;
}


 tipoCustomScript.ValeActionPlan_detail_complete = function(data_handle) {
console.log(data_handle);
data_handle.selected_tipo.status = 'Completed';
data_handle.selected_tipo.progress_notes = data_handle.additional_tipo.notes;
tipoHandle.updateTipo('Action', data_handle.selected_tipo.tipo_id, data_handle.selected_tipo);
if(data_handle.selected_tipo.person_to_close) {
    tipoHandle.sendPushNotification('Close the Action', 
                                    'Action is completed, waiting for reviewing the action and close it',
                                    data_handle.selected_tipo.person_to_close,
                                    'Action',
                                    data_handle.selected_tipo.tipo_id,
                                    'Home',
                                    'view');
}

return true;
}


//___ValeActionPlan___
//___Verifications___

 tipoCustomScript.Verifications_site_OnChange  = function(data_handle) {
console.log(data_handle);
data_handle.tipo.tipo_filter = '(site:'+ data_handle.tipo.site + ' OR structure:' + data_handle.tipo.structure + ')';
}

 tipoCustomScript.Verifications_structure_OnChange  = function(data_handle) {
console.log(data_handle);
data_handle.tipo.tipo_filter = '(site:'+ data_handle.tipo.site + ' OR structure:' + data_handle.tipo.structure + ')';
}

 tipoCustomScript.Verifications_OnList  = function(data_handle) {
tipoHandle.toTipo('create', 'Verifications');
}

//___Verifications___
//___CreateRiskVerifications___

 tipoCustomScript.CreateRiskVerifications_tipo_id_OnChange  = function(data_handle) {
console.log(data_handle);
tipo_filter = '(site:'+ data_handle.tipo.site + '|| structure:'+ data_handle.tipo.structure +')';
}

 tipoCustomScript.CreateRiskVerifications_choose_locn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.tipo_filter = new_val.__all__keys;
data_handle.tipo.hierarchy_key = new_val.__all__hierarchy__keys && new_val.__all__hierarchy__keys[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.site_level_1 = new_val.site_level_1 && new_val.site_level_1[0];
data_handle.tipo.site_level_1_labels = new_val.site_level_1_labels && new_val.site_level_1_labels[0];
data_handle.tipo.site_level_2 = new_val.site_level_2 && new_val.site_level_2[0];
data_handle.tipo.site_level_2_labels = new_val.site_level_2_labels && new_val.site_level_2_labels[0];
data_handle.tipo.site_level_3 = new_val.site_level_3 && new_val.site_level_3[0];
data_handle.tipo.site_level_3_labels = new_val.site_level_3_labels && new_val.site_level_3_labels[0];
data_handle.tipo.site_level_4 = new_val.site_level_4 && new_val.site_level_4[0];
data_handle.tipo.site_level_4_labels = new_val.site_level_4_labels && new_val.site_level_4_labels[0];
data_handle.tipo.site_level_5 = new_val.site_level_5 && new_val.site_level_5[0];
data_handle.tipo.site_level_5_labels = new_val.site_level_5_labels && new_val.site_level_5_labels[0];
data_handle.tipo.client = new_val.client && new_val.client[0];
data_handle.tipo.client_labels = new_val.client_labels && new_val.client_labels[0];
data_handle.tipo.company = new_val.company && new_val.company[0];
data_handle.tipo.company_labels = new_val.company_labels && new_val.company_labels[0];
data_handle.tipo.forwood_level = new_val.forwood_level && new_val.forwood_level[0];
data_handle.tipo.forwood_level_labels = new_val.forwood_level_labels && new_val.forwood_level_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];
data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
data_handle.tipo.structure_level_1 = new_val.structure_level_1 && new_val.structure_level_1[0];
data_handle.tipo.structure_level_1_labels = new_val.structure_level_1_labels && new_val.structure_level_1_labels[0];
data_handle.tipo.structure_level_2 = new_val.structure_level_2 && new_val.structure_level_2[0];
data_handle.tipo.structure_level_2_labels = new_val.structure_level_2_labels && new_val.structure_level_2_labels[0];
data_handle.tipo.structure_level_3 = new_val.structure_level_3 && new_val.structure_level_3[0];
data_handle.tipo.structure_level_3_labels = new_val.structure_level_3_labels && new_val.structure_level_3_labels[0];
data_handle.tipo.structure_level_4 = new_val.structure_level_4 && new_val.structure_level_4[0];
data_handle.tipo.structure_level_4_labels = new_val.structure_level_4_labels && new_val.structure_level_4_labels[0];
}

 tipoCustomScript.CreateRiskVerifications_OnList  = function(data_handle) {
tipoHandle.toTipo('create', 'CreateRiskVerifications');
}

//___CreateRiskVerifications___
//___RiskChecklist___

 tipoCustomScript.RiskChecklist_OnView  = function(data_handle) {
if(data_handle.mode === "create") {
let cdate = new Date();
let dt = cdate.toISOString();
data_handle.tipo.created_date = dt;
}
}

 tipoCustomScript.RiskChecklist_OnList  = function(data_handle) {
let page = tipoHandle.tipoInternalHandleService.getCurrentState().params && tipoHandle.tipoInternalHandleService.getCurrentState().params.page;
let filter_str = tipoHandle.tipoInternalHandleService.getCurrentState().url_filter;
let update_str = filter_str.replace('Contact with Electricity', 'TT___CONTACT_WITH_ELECTRICITY').replace('Επαφή με ηλεκτρική ενέργεια', 'TT___CONTACT_WITH_ELECTRICITY').replace('Lifting Operations', 'TT___LIFTING_OPERATIONS').replace('Επιχειρήσεις ανύψωσης', 'TT___LIFTING_OPERATIONS').replace('Fall from Height','TT___FALL_FROM_HEIGHT').replace('Πτώση από το ύψος','TT___FALL_FROM_HEIGHT').replace('Falling Objects', 'TT___FALLING_OBJECTS').replace('Πτώση αντικειμένων', 'TT___FALLING_OBJECTS').replace('Vehicle Collision or Rollover', 'TT___VEHICLE_COLLISION_OR_ROLLOVER').replace('Σύγκρουση ή ανατροπή οχημάτων', 'TT___VEHICLE_COLLISION_OR_ROLLOVER').replace('Vehicle Impact on Person', 'TT___VEHICLE_IMPACT_ON_PERSON').replace('Αντίκτυπος οχήματος στο άτομο', 'TT___VEHICLE_IMPACT_ON_PERSON');
console.log(filter_str, update_str);
tipoHandle.routeTo('/tipo/RiskChecklist', {filter: update_str, menu_filter:tipoHandle.tipoInternalHandleService.getCurrentState().url_menu_filter,page: page},false, true);
}

 tipoCustomScript.RiskChecklist_PostServerSave  = function(data_handle) {
tipoHandle.tipoInternalHandleService.tipoDataService.getTipo('RiskChecklist', data_handle.tipo.tipo_id, {}, true, undefined, undefined, true, true).subscribe();
}

 tipoCustomScript.RiskChecklist_OnSave  = function(data_handle) {
//Remove this code when laika fixes count issue
let na_count=[];
let no_count =[];
let yes_count=[];
for (i=0;i<data_handle.tipo.___checklist_data___.length;i++) {
    yes_count.push(data_handle.tipo.___checklist_data___[i].data.filter(e=>e.answer=='Yes').length);
    no_count.push(data_handle.tipo.___checklist_data___[i].data.filter(e=>e.answer=='No').length);
    na_count.push(data_handle.tipo.___checklist_data___[i].data.filter(e=>e.answer=='NA').length);
}
data_handle.tipo.___checklist_counts___.total_na = _.sum(na_count);
data_handle.tipo.___checklist_counts___.total_no = _.sum(no_count);
data_handle.tipo.___checklist_counts___.total_yes = _.sum(yes_count);
// if(!data_handle.tipo.___checklist_counts___.total_na) {
//     data_handle.tipo.___checklist_counts___.total_na = 0;
// } else if(!data_handle.tipo.___checklist_counts___.total_no) {
//         data_handle.tipo.___checklist_counts___.total_no = 0;
// } else if(!data_handle.tipo.___checklist_counts___.total_yes) {
//         data_handle.tipo.___checklist_counts___.total_yes = 0;
// }
if(data_handle.mode == 'create') {
    if(data_handle.tipo.risk === 'Contact with Electricity' || data_handle.tipo.risk === 'Επαφή με ηλεκτρική ενέργεια') {
        data_handle.tipo.risk___token = 'TT___CONTACT_WITH_ELECTRICITY'
    } 
    if(data_handle.tipo.risk === 'Fall from Height' || data_handle.tipo.risk === 'Πτώση από ύψος') {
        data_handle.tipo.risk___token = 'TT___FALL_FROM_HEIGHT'
    }
    if(data_handle.tipo.risk === 'Falling Objects' || data_handle.tipo.risk === 'Πτώση αντικειμένων') {
        data_handle.tipo.risk___token = 'TT___FALLING_OBJECTS'
    }
    if(data_handle.tipo.risk === 'Lifting Operations' || data_handle.tipo.risk ==='Εργασίες ανύψωσης') {
        data_handle.tipo.risk___token = 'TT___LIFTING_OPERATIONS'
    }
    if(data_handle.tipo.risk === 'Vehicle Collision or Rollover' || data_handle.tipo.risk === 'Σύγκρουση ή ανατροπή οχήματος') {
        data_handle.tipo.risk___token = 'TT___VEHICLE_COLLISION_OR_ROLLOVER'
    }
    if(data_handle.tipo.risk === 'Vehicle Impact on Person' || data_handle.tipo.risk === 'Πρόσκρουση οχήματος με άνθρωπο') {
        data_handle.tipo.risk___token = 'TT___VEHICLE_IMPACT_ON_PERSON'
    }
    if(data_handle.tipo.risk === 'Environment & Climate Change Incident' || data_handle.tipo.risk === 'Περιβαλλοντικά Συμβάντα & Συμβάντα Κλιματικής Αλλαγής') {
        data_handle.tipo.risk___token = 'TT___ENVIRONMENT_CLIMATE_CHANGE_INCIDENT'
    }
    data_handle.tipo.created_by = tipoHandle.user_meta.created_by;

}
}

 tipoCustomScript.RiskChecklist_OnCreate  = function(data_handle) {
tipoHandle.toTipo('create','CreateRiskVerifications');
return true;
}

 tipoCustomScript.RiskChecklist_list_copy = function(data_handle) {
const params = {
    copyFrom: data_handle.selected_tipo_ids[0],
}
const url = `/tipo/${data_handle.tipo_name}/new`;
tipoHandle.routeTo(url,params,true,true);
return true;
}


//___RiskChecklist___
//___SafetyMasterData___

 tipoCustomScript.SafetyMasterData_type_AfterLookup = function(data_handle) {
tipoHandle['safetyParentTypes'] = data_handle.tipo_list;
}

 tipoCustomScript.SafetyMasterData_parent_BeforeLookup = function(data_handle) {
const parentType = tipoHandle['safetyParentTypes'];
_.each(parentType, (each_type) => {
    if(each_type.tipo_id === data_handle.root.type && each_type.parent_type) {
        data_handle.query_params['tipo_filter'] = 'type:(' + each_type.parent_type + ')'
    }
})
}

 tipoCustomScript.SafetyMasterData_list_import_data = function(data_handle) {
tipoHandle.presentTipoForm('Import data', 'TipoImportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


//___SafetyMasterData___
//___ActionPlan___

 tipoCustomScript.ActionPlan_goto_parent = function(data_handle) {
console.log(data_handle);

if(data_handle.tipo.parent_tipo_id && data_handle.tipo.parent_tipo_name) {
    tipoHandle.toTipo('view', data_handle.tipo.parent_tipo_name, data_handle.tipo.parent_tipo_id);
}
else {
    tipoHandle.toTipo('view', data_handle.tipo.verification_tipo_id_labels, data_handle.tipo.verification_tipo_id);
}
return true;
}


 tipoCustomScript.ActionPlan_complete_action = function(data_handle) {
// function htmlencode(str) {
//     var buf = [];
//     for (var i = str.length - 1; i >= 0; i--) {
//         buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
//     }
//     return buf.join('');
// }
const now = new Date(tipoHandle.getDateUtil().utc().format()).toISOString();
const time = tipoHandle.getDateUtil().utc().format('HH.mm.sss');
const timearray = time.split('.');
const dtnumber = (+timearray[0] * 3600) + (+timearray[1] * 60);
data_handle.tipo.complete_date = now;
data_handle.tipo.complete_date_dtnumber = dtnumber;
if (tipoHandle.user_meta.user_attributes.user.locale === 'en') {
    data_handle.tipo.status_ap = 'Complete';
} else {
    data_handle.tipo.status_ap = 'Πλήρης';
}
data_handle.tipo.status_ap___token = 'TT___COMPLETE';
tipoHandle.updateTipo('ActionPlan', data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
    if (res) {
        setTimeout(() => {
            tipoHandle.showMessage(tipoHandle.getInstantTranslation('TT___ACTION_COMPLETED'), '');
            data_handle.formControl.get('status_ap___token').setValue('TT___COMPLETE');
            if (tipoHandle.user_meta.user_attributes.user.locale === 'en') {
                data_handle.formControl.get('status_ap').setValue('Complete');
            } else {
                data_handle.formControl.get('status_ap').setValue('Πλήρης');
            }
            tipoHandle.getTipo('ActionPlan', data_handle.tipo.tipo_id);
        }, 1000);
    }
});



if (tipoHandle.tipoInternalHandleService.isOnline) {
    if (data_handle.tipo.parent_tipo_name === 'CreateIncident') {
        tipoHandle.getTipo(data_handle.tipo.parent_tipo_name, data_handle.tipo.parent_tipo_id).then((result) => {
            if (result.incident_action.length > 0) {
                let action_ids = _.map(result.incident_action, 'action_plan');
                let query_params = { tipo_filter: `tipo_id:${action_ids.join(' OR ')}` }
                tipoHandle.getTipos('ActionPlan', query_params, true).then((res) => {
                    result.overview_total_actions = result.incident_action.length;
                    let actionPlans = res.filter(item => result.incident_action.some(itemToBeRemoved => itemToBeRemoved.action_plan === item.tipo_id))
                    result.overview_outstanding_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___INCOMPLETE').length;
                    result.completed_actions = result.overview_total_actions - result.overview_outstanding_actions;;
                    tipoHandle.updateTipo(result.tipo_name, result.tipo_id, result);
                })
            }
        })
    }

    if (data_handle.tipo.parent_tipo_name === 'Meeting') {
        tipoHandle.getTipo(data_handle.tipo.parent_tipo_name, data_handle.tipo.parent_tipo_id).then((result) => {
            if (result.incident_action.length > 0) {
                let action_ids = _.map(result.incident_action, 'action_plan');
                let query_params = { tipo_filter: `tipo_id:${action_ids.join(' OR ')}` }
                tipoHandle.getTipos('ActionPlan', query_params, true).then((res) => {
                    result.safety_meetings.meeting_total_actions = result.incident_action.length;
                    let actionPlans = res.filter(item => result.incident_action.some(itemToBeRemoved => itemToBeRemoved.action_plan === item.tipo_id))
                    result.safety_meetings.meeting_outstanding_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___INCOMPLETE').length;
                    result.safety_meetings.meeting_completed_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___COMPLETE').length;
                    tipoHandle.updateTipo(result.tipo_name, result.tipo_id, result);
                })
            }
        })
    }

    if (data_handle.tipo.parent_tipo_name === 'SafetyConversations') {
        tipoHandle.getTipo(data_handle.tipo.parent_tipo_name, data_handle.tipo.parent_tipo_id).then((result) => {
            if (result.incident_action.length > 0) {
                let action_ids = _.map(result.incident_action, 'action_plan');
                let query_params = { tipo_filter: `tipo_id:${action_ids.join(' OR ')}` }
                tipoHandle.getTipos('ActionPlan', query_params, true).then((res) => {
                    result.safety_conversations.conversation_total_actions = result.incident_action.length;
                    let actionPlans = res.filter(item => result.incident_action.some(itemToBeRemoved => itemToBeRemoved.action_plan === item.tipo_id))
                    result.safety_conversations.conversation_outstanding_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___INCOMPLETE').length;
                    result.safety_conversations.conversation_completed_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___COMPLETE').length;
                    tipoHandle.updateTipo(result.tipo_name, result.tipo_id, result);
                })
            }
        })
    }

}

return true;
}


 tipoCustomScript.ActionPlan_action_class_OnChange  = function(data_handle) {
data_handle.tipo.verification_tipo_id_labels = tipoHandle.tipoInternalHandleService.getCurrentState().tipo_name;
data_handle.formControl.get('verification_tipo_id_labels').setValue(tipoHandle.tipoInternalHandleService.getCurrentState().tipo_name);
data_handle.tipo.verification_tipo_id = tipoHandle.tipoInternalHandleService.getCurrentState().tipo_id;
data_handle.formControl.get('verification_tipo_id').setValue(tipoHandle.tipoInternalHandleService.getCurrentState().tipo_id);

if(data_handle.tipo.action_class___token === 'TT___FIXED_IN_FIELD') {
    data_handle.tipo.status_ap___token = 'TT___COMPLETE';
    data_handle.tipo.status_ap = (tipoHandle.user_meta.user_attributes.user.locale === 'en') ? 'Complete' : 'Πλήρης';
    data_handle.formControl.get('status_ap___token').setValue('TT___COMPLETE');
    data_handle.tipo.complete_date = new Date(tipoHandle.getDateUtil().utc().format()).toISOString();
} else{
    data_handle.tipo.status_ap___token = 'TT___INCOMPLETE';
    data_handle.tipo.status_ap = (tipoHandle.user_meta.user_attributes.user.locale === 'en') ? 'Incomplete' : 'Ατελής';
    data_handle.formControl.get('status_ap___token').setValue('TT___INCOMPLETE');
    data_handle.formControl.get('staus_ap').setValue('Incomplete');
}
}

 tipoCustomScript.ActionPlan_review_OnChange  = function(data_handle) {
if(data_handle.tipo.review) {
    let currentdate = new Date();
    currentdate.setDate(currentdate.getDate() + 28);
    let newdate = currentdate.toISOString()
    data_handle.tipo.review_date = newdate;
    data_handle.formControl.get('review_date').setValue(newdate);
}
}

 tipoCustomScript.ActionPlan_OnList  = function(data_handle) {
console.log("")
if (tipoHandle.tipoInternalHandleService.isOnline) {
    let page = tipoHandle.tipoInternalHandleService.getCurrentState().params && tipoHandle.tipoInternalHandleService.getCurrentState().params.page;
    let filter_str = tipoHandle.tipoInternalHandleService.getCurrentState().url_filter;
        let update_str = filter_str.replace('Task', 'TT___TASK').replace('Εργο', 'TT___TASK').replace('Fixed in Field', 'TT___FIXED_IN_FIELD').replace('Διορθώθηκε στο πεδίο', 'TT___FIXED_IN_FIELD').replace('Complete', 'TT___COMPLETE').replace('Πλήρης', 'TT___COMPLETE').replace('Incomplete', 'TT___INCOMPLETE').replace('Ατελής', 'TT___INCOMPLETE').replace('Urgent', 'TT___URGENT').replace('Επείγων', 'TT___URGENT').replace('Medium', 'TT___MEDIUM').replace('Μεσαίο', 'TT___MEDIUM').replace('High', 'TT___HIGH').replace('Υψηλός', 'TT___HIGH').replace('Low', 'TT___LOW').replace('Χαμηλός', 'TT___LOW').replace('Behavioural', 'TT___BEHAVIOURAL').replace('Συμπεριφορικός', 'TT___BEHAVIOURAL').replace('System or Process', 'TT___SYSTEM_OR_PROCESS').replace('Σύστημα ή διαδικασία', 'TT___SYSTEM_OR_PROCESS').replace('Plant or Equipment', 'TT___PLANT_OR_EQUIPMENT').replace('Εργοστάσιο ή εξοπλισμός', 'TT___PLANT_OR_EQUIPMENT');
        console.log(filter_str, update_str);
        tipoHandle.routeTo('/tipo/ActionPlan', { filter: update_str, menu_filter: tipoHandle.tipoInternalHandleService.getCurrentState().url_menu_filter, page: page }, false, true);
}
}

 tipoCustomScript.ActionPlan_OnView  = function(data_handle) {
if (data_handle.mode === 'create') {
    tipoHandle.getTipoParentContext();
    console.log('##Parent##', tipoHandle.getTipoParentContext().value)
    console.log(data_handle)
    data_handle.tipo.geo_locn = tipoHandle.getTipoParentContext().value.tipo.geo_locn;
    data_handle.tipo.geo_locn_locn = tipoHandle.getTipoParentContext().value.tipo.geo_locn_location;
    data_handle.tipo.structure_level_1_labels = tipoHandle.getTipoParentContext().value.tipo.structure_level_1_labels;
    data_handle.tipo.company_labels = tipoHandle.getTipoParentContext().value.tipo.company_labels;
    data_handle.tipo.contractor_company = tipoHandle.getTipoParentContext().value.tipo.contractor_company_labels;
}
}

 tipoCustomScript.ActionPlan_OnSave  = function(data_handle) {
if(data_handle.formControl && !data_handle.formControl.valid) {
    return;
}
if (data_handle.mode === 'create') {
    if (data_handle.tipo.action_class___token === 'TT___FIXED_IN_FIELD') {
        const now = new Date(tipoHandle.getDateUtil().utc().format()).toISOString();
        const time = tipoHandle.getDateUtil().utc().format('HH.mm.sss');
        const timearray = time.split('.');
        const dtnumber = (+timearray[0] * 3600) + (+timearray[1] * 60);
        data_handle.tipo.ap_start_date = now;
        data_handle.tipo.ap_start_date_dtnumber = dtnumber;
        data_handle.tipo.end_date = now;
        data_handle.tipo.end_date_dtnumber = dtnumber;
        data_handle.tipo.complete_date = now;
        data_handle.tipo.complete_date_dtnumber = dtnumber;
    }
       tipoHandle.getTipo(data_handle.tipo.parent_tipo_name, data_handle.tipo.parent_tipo_id, {}).then((res) => {
        data_handle.tipo.site_labels = res.site_labels;
        data_handle.tipo.company_labels = res.company_labels;
        data_handle.tipo.client_labels = res.client_labels;
        data_handle.tipo.forwood_level_labels = res.forwood_level_labels;
        data_handle.tipo.physical_loc_labels = res.physical_loc_labels;
        data_handle.tipo.action_plan_locn = res.where_incidentlocn;
        data_handle.tipo.hierarchy_key = res.hierarchy_key;
        return false;
})
 }
}

 tipoCustomScript.ActionPlan_PostServerSave  = function(data_handle) {
function htmlencode(str) {
    var buf = [];
    for (var i = str.length - 1; i >= 0; i--) {
        buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }
    return buf.join('');
}
if (data_handle.formControl && !data_handle.formControl.valid) {
    return;
}

tipoHandle.tipoInternalHandleService.tipoDataService.getTipo('ActionPlan', data_handle.tipo.tipo_id, {}, true, undefined, undefined, true, true).subscribe();
//Notification on create of action plan
    const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin + '/';
    const ACTION_LINK = domain + '#/tipo/ActionPlan/' + data_handle.tipo.tipo_id;
    const APP_LINK = domain + '#/login';
    const dt = data_handle.tipo.end_date;
    const Date = dt ? tipoHandle.getDateUtil(dt).toString() : '';

    let Action_Status;
    let Action_Type;
    let users;
    if (data_handle.tipo.status_ap___token === 'TT___INCOMPLETE') {
    
        if (data_handle.tipo.action_class___token == 'TT___TASK') {
            Action_Status = htmlencode('Εργασία');
        }

        if (data_handle.tipo.action_plan_type___token == 'TT___PLANT_OR_EQUIPMENT') {
            Action_Type = htmlencode('Εγκαταστάσεις ή εξοπλισμός');
        } else if (data_handle.tipo.action_plan_type___token == 'TT___BEHAVIOURAL') {
            Action_Type = htmlencode('Συμπεριφορά');
        } else if (data_handle.tipo.action_plan_type___token == 'TT___SYSTEM_OR_PROCESS') {
            Action_Type = htmlencode('Σύστημα ή διαδικασία');
        }

        if(data_handle.tipo.notify_responsible_person && data_handle.tipo.review){
            users = [data_handle.tipo.responsible_person_, data_handle.tipo.action_reviewer]
        } else if(data_handle.tipo.notify_responsible_person){
            users = [data_handle.tipo.responsible_person_]
        } else if(data_handle.tipo.review){
            users = [data_handle.tipo.action_reviewer]
        }

        let subject = 'Δημιουργία στοιχείου σχεδίου δράσης';
        let body = `<div>${htmlencode('Έχετε οριστεί ως Υπεύθυνος για ένα στοιχείο του σχεδίου δράσης. Πρέπει να ολοκληρωθεί πριν από την καθορισμένη ημερομηνία λήξης.')} <br>
                <h4>${htmlencode('Λεπτομέρειες σχεδίου δράσης')}: </h4>
                    ${htmlencode('Αναγνωριστικό σχεδίου δράσης')}: ${data_handle.tipo.tipo_id} <br>
                    ${htmlencode('Κατηγορία δράσης')}: ${Action_Status}<br>
                    ${htmlencode('Τύπος σχεδίου δράσης')}: ${Action_Type}<br>
                    ${htmlencode('Δραστηριότητα')}: ${htmlencode(data_handle.tipo.action_activity)} <br>
                    ${htmlencode('Ημερομηνία λήξης')}: ${htmlencode(Date)} <br><br>

                    ${htmlencode('Μπορείτε να δείτε τις λεπτομέρειες του σχεδίου δράσης εδώ')} <a href=" ${ACTION_LINK} " target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >${htmlencode('εδώ')}</a> <br><br><br>
                    <i>${htmlencode('Με εκτίμηση')}, <br>
                    Forwood Safety</i><br><br><br><br>
                    <hr>
                    <br>
                    <div style = "font-size: 14px">${htmlencode('Παρακαλείστε να σημειώσετε ότι για λόγους ασφαλείας')} <b>${htmlencode('πρέπει να είστε συνδεδεμένοι στην πύλη')}</b> ${htmlencode('προκειμένου ναχρησιμοποιήσετε οποιουσδήποτε άμεσους συνδέσμους που παρουσιάζονται σε αυτό το μήνυμα ηλεκτρονικού ταχυδρομείου.')}
                    <br />${htmlencode('Αφού συνδεθείτε στην πύλη, μπορείτε να κάνετε κλικ στο στο σύνδεσμο (στους συνδέσμους) για να αποκτήσετε πρόσβαση στην (στις) αντίστοιχη(-ες) σελίδα(-ες).')}<br />
                    <br />${htmlencode('Αυτό είναι ένα αυτοματοποιημένο μήνυμα από την Πύλη Ασφάλειας του Forwood.')} ${htmlencode('Παρακαλώ μην απαντήσετε σε αυτό το μήνυμα.')} </div>`;
        sendEmail(users, subject, body);
    }



// Notification complete action
    let complete_dt = data_handle.tipo.complete_date;
    const CDate = complete_dt ? tipoHandle.getDateUtil(complete_dt).toString() : '';
    let end_date = data_handle.tipo.end_date;
    const EDate = end_date ? tipoHandle.getDateUtil(end_date).toString() : '';
    if (data_handle.tipo.action_class___token == 'TT___TASK' && data_handle.tipo.status_ap___token === 'TT___COMPLETE' && !(data_handle.tipo.ActionCompletedEmailSent)) {

        let subject = 'Ολοκληρωμένο σχέδιο δράσης';
        let body = `<div>${htmlencode('Το στοιχείο του σχεδίου δράσης που δημιουργήσατε έχει ολοκληρωθεί, παρακαλείστε να το επανεξετάσετε.')} <br><br>
        <b style="font-size: 22px;">${htmlencode('Λεπτομέρειες σχεδίου δράσης:')} </b> <br><br>
        ${htmlencode('Αναγνωριστικό σχεδίου δράσης')} : ${data_handle.tipo.tipo_id} <br>
        ${htmlencode('Κατηγορία δράσης')} : ${htmlencode(data_handle.tipo.action_class)}<br>
        ${htmlencode('Τύπος σχεδίου δράσης')} : ${htmlencode(data_handle.tipo.action_plan_type)}<br>
        ${htmlencode('Δραστηριότητα')} : ${htmlencode(data_handle.tipo.action_activity)} <br>
        ${htmlencode('Ημερομηνία λήξης')} : ${htmlencode(EDate)} <br>
        ${htmlencode('Ολοκληρώθηκε Ημερομηνία')} : ${htmlencode(CDate)}<br><br>
        ${htmlencode('Μπορείτε να δείτε τις λεπτομέρειες του σχεδίου δράσης εδώ')} <a href=" ${ACTION_LINK} " target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >${htmlencode('εδώ')}</a> <br><br><br>
                    <i>${htmlencode('Με εκτίμηση')}, <br>
                    Forwood Safety</i><br><br><br><br>
                    <hr>
                    <br>
                    <div style = "font-size: 14px">${htmlencode('Παρακαλείστε να σημειώσετε ότι για λόγους ασφαλείας')} <b>${htmlencode('πρέπει να είστε συνδεδεμένοι στην πύλη')}</b> ${htmlencode('προκειμένου ναχρησιμοποιήσετε οποιουσδήποτε άμεσους συνδέσμους που παρουσιάζονται σε αυτό το μήνυμα ηλεκτρονικού ταχυδρομείου.')}
                    <br />${htmlencode('Αφού συνδεθείτε στην πύλη, μπορείτε να κάνετε κλικ στο στο σύνδεσμο (στους συνδέσμους) για να αποκτήσετε πρόσβαση στην (στις) αντίστοιχη(-ες) σελίδα(-ες).')}<br />
                    <br />${htmlencode('Αυτό είναι ένα αυτοματοποιημένο μήνυμα από την Πύλη Ασφάλειας του Forwood.')} ${htmlencode('Παρακαλώ μην απαντήσετε σε αυτό το μήνυμα.')} </div>`;

        // tipoHandle.sendEmail(data_handle.response.created_by, subject, body);
        sendEmail([data_handle.response.created_by], subject, body);
        data_handle.tipo.ActionCompletedEmailSent = true;
       // tipoHandle.updateTipo('ActionPlan',data_handle.tipo.tipo_id,data_handle.tipo)
        tipoHandle.updateTipo('ActionPlan',data_handle.tipo.tipo_id,data_handle.tipo).then((result)=> {
            console.log("data_handle",data_handle.tipo)
           
        })

    }


    function sendEmail(users, subject, body) {
        console.log(users, subject, body);
        const recipents_limit = 50;
        var a = _.uniq(users);
        while (a.length) {
            let recipents = a.splice(0, recipents_limit);
            console.log(recipents.toString());
            tipoHandle.sendEmail(recipents.toString(), subject, body);
        }
    }
}

 tipoCustomScript.ActionPlan_list_export_data = function(data_handle) {
tipoHandle.presentTipoForm('Export data', 'TipoExportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


 tipoCustomScript.ActionPlan_list_bulk_delete = function(data_handle) {
var count = 0;
_.forEach(data_handle.selected_tipos, function(each, index){
    tipoHandle.deleteTipo('CVRMSActionPlan', each.tipo_id).then(function() {
        count++;
        if(data_handle.selected_tipos.length == count) {
            tipoHandle.showMessage('Delete complete successfully');
            tipoHandle.toTipo('list','CVRMSActionPlan');
        }
    });

});
}


//___ActionPlan___
//___StructureMasterData___

 tipoCustomScript.StructureMasterData_type_AfterLookup = function(data_handle) {
tipoHandle['structureParentTypes'] = _.uniqBy(_.concat(data_handle.tipo_list, tipoHandle['structureParentTypes'] || []), 'tipo_id');
}

 tipoCustomScript.StructureMasterData_type_OnChange  = function(data_handle) {
const parentType = tipoHandle['structureParentTypes'];
let is_parent_type = false;
_.each(parentType, (each_type) => {
    if(each_type.tipo_id === data_handle.new_value && each_type.parent_type) {
        is_parent_type = true
    }
})
data_handle.tipo.is_parent_type = is_parent_type;
}

 tipoCustomScript.StructureMasterData_parent_AfterLookup = function(data_handle) {
tipoHandle['structureHierarchyTypes'] = _.uniqBy(_.concat(data_handle.tipo_list, tipoHandle['structureHierarchyTypes'] || []), 'tipo_id');
}

 tipoCustomScript.StructureMasterData_parent_BeforeLookup = function(data_handle) {
const parentType = tipoHandle['structureParentTypes'];
_.each(parentType, (each_type) => {
    if(each_type.tipo_id === data_handle.root.type && each_type.parent_type) {
        data_handle.query_params['tipo_filter'] = 'type:(' + each_type.parent_type + ')'
    }
})
}

 tipoCustomScript.StructureMasterData_OnSave  = function(data_handle) {
if(tipoHandle['structureHierarchyTypes']) {
    _.each(tipoHandle['structureHierarchyTypes'], (each) => {
        if(each.tipo_id === data_handle.tipo.parent ) {
            data_handle.tipo.hierarchy_key = each.hierarchy_key ? each.hierarchy_key + '.' + data_handle.tipo.tipo_id : data_handle.tipo.tipo_id;
        }
    });
}
if(!data_handle.tipo.hierarchy_key) {
    data_handle.tipo.hierarchy_key = data_handle.tipo.tipo_id
}
}

 tipoCustomScript.StructureMasterData_list_upload_csv = function(data_handle) {
tipoHandle.presentTipoForm('Upload CSV', 'UploadCSV', 'create', { tipo: {}, hide_actions: true }, []).then((val) => {
    if(val) {
        tipoHandle.callAction('TipoStructureMasterData', 'upload_csv', [], 'UploadCSV', val).then((response) => {
            console.log(response);
        })
    }
});

return true;
}


//___StructureMasterData___
//___OfflineConfig___

 tipoCustomScript.OfflineConfig_OnSave  = function(data_handle) {
// const promises = [];
// return Promise.all([tipoHandle.getTipos('SafetyMasterData', {tipo_filter: 'navigation_type:Checklist'}).then((result) => {
//     const userkey = tipoHandle.userkey();
//     _.forEach(result, (masterData) => {
//         if(masterData.question_group_order && masterData.question_group_order.length > 0) {
//             const tipo_filter = '(question_group.keyword:(' + _.join(masterData.question_group_order.map(group => group.question_group), ' OR ') + '))';
//             promises.push(tipoHandle.getTipos('QuestionsBank', {per_page: 1000, tipo_filter: tipo_filter}, undefined, undefined, undefined, true));
//         }
//     })
//     promises.push(tipoHandle.getTipos('SafetyMasterData', {tipo_filter: '(type:risk)'}, undefined, undefined, undefined, true));
//     promises.push(tipoHandle.getTipos('SafetyMasterData', {tipo_filter: '(type:industry)'}, undefined, undefined, undefined, true));
//     promises.push(tipoHandle.getTipos('SafetyMasterData', {tipo_filter: '(type:inspection)'}, undefined, undefined, undefined, true));
//     promises.push(tipoHandle.getTipos('SafetyMasterData', {tipo_filter: '(type:control)'}, undefined, undefined, undefined, true));
//     promises.push(tipoHandle.getTipos('MasterDataTypes', {tipo_filter: 'parent_type:risk'}, undefined, undefined, undefined, true));
//     promises.push(tipoHandle.getTipos('MasterDataTypes', {tipo_filter: 'parent_type:industry'}, undefined, undefined, undefined, true));
//     promises.push(tipoHandle.getTipos('MasterDataTypes', {tipo_filter: 'parent_type:inspection'}, undefined, undefined, undefined, true));
//     promises.push(tipoHandle.getTipos('MasterDataTypes', {tipo_filter: 'parent_type:control'}, undefined, undefined, undefined, true));
//     promises.push(tipoHandle.getTipos('TipoStructureMasterData', {tipo_action: 'hierachy', userkey: userkey}, undefined, undefined, undefined, true));
//     promises.push(tipoHandle.getTipos('ConfigureAnswerType', {per_page: 20}));
//     return promises;
// })]);
}

//___OfflineConfig___
//___Take5Checklist___

 tipoCustomScript.Take5Checklist_choose_locn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.tipo_filter = 'hierarchy.__all__keys.keyword:(' + _.join(new_val.__all__keys, ' OR ') +')';
data_handle.tipo.business_unit = new_val.business_unit && new_val.business_unit[0];
data_handle.tipo.business_unit_labels = new_val.business_unit_labels && new_val.business_unit_labels[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.tsf_name = new_val.tsf_name && new_val.tsf_name[0];
data_handle.tipo.tsf_name_labels = new_val.tsf_name_labels && new_val.tsf_name_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];
data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
}

 tipoCustomScript.Take5Checklist_list_copy_this = function(data_handle) {
const params = {
    copyFrom: data_handle.selected_tipo_ids[0],
}
const url = `/tipo/${data_handle.tipo_name}/new`;
tipoHandle.routeTo(url,params,true,true);
return true;
}


//___Take5Checklist___
//___CreateTake5Inspections___

 tipoCustomScript.CreateTake5Inspections_tipo_id_OnChange  = function(data_handle) {
console.log(data_handle);
tipo_filter = '(site:'+ data_handle.tipo.site + '|| structure:'+ data_handle.tipo.structure +')';
}

 tipoCustomScript.CreateTake5Inspections_choose_locn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.tipo_filter = new_val.__all__keys;
data_handle.tipo.business_unit = new_val.business_unit && new_val.business_unit[0];
data_handle.tipo.business_unit_labels = new_val.business_unit_labels && new_val.business_unit_labels[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.tsf_name = new_val.tsf_name && new_val.tsf_name[0];
data_handle.tipo.tsf_name_labels = new_val.tsf_name_labels && new_val.tsf_name_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];

data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
}

 tipoCustomScript.CreateTake5Inspections_OnList  = function(data_handle) {
tipoHandle.toTipo('create', 'CreateRiskVerifications');
}

//___CreateTake5Inspections___
//___Staff123___

 tipoCustomScript.Staff123_list_notify = function(data_handle) {
console.log('First line');
console.log(data_handle);
_.each( data_handle.selected_tipos, function(value){
    console.log('Selected email = ' + value.email);
    console.log('Selected record id = ' + value.tipo_id);
    tipoHandle.sendPushNotification('Testing pushnotifications',data_handle.additional_tipo.title + '' + data_handle.additional_tipo.text ,value.email,
       'Staff',value.tipo_id,'Home','view',null,'');   
});
console.log('LAST LINE');
}


 tipoCustomScript.Staff123_list_invite_people = function(data_handle) {
_.each( data_handle.selected_tipos, function(value){
    console.log('value email = ' + value.email);
    console.log('tipo_id = ' + value.tipo_id);
    console.log('value designation =' + value.role);
    tipoHandle.inviteUser('Staff', value.tipo_id, value.display_name, value.email, value.role).then(
        function(success){
            console.log('invited');            
    }, function(error){
        console.log('error from tipo handle = ' + error);
    });
    });
console.log('Action Clicked');
return true;
}


 tipoCustomScript.Staff123_detail_change_role = function(data_handle) {
return true;
}

//___Staff123___
//___ConfigureAnswerType___

 tipoCustomScript.ConfigureAnswerType_list_export = function(data_handle) {
tipoHandle.presentTipoForm('Export data', 'TipoExportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, ___hide_cancel_action___: false, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


 tipoCustomScript.ConfigureAnswerType_list_import = function(data_handle) {
tipoHandle.presentTipoForm('Import data', 'TipoImportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, ___hide_cancel_action___: false, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


//___ConfigureAnswerType___
//___WorkPlanning___

 tipoCustomScript.WorkPlanning_check_existing_ptw = function(data_handle) {
let filter =  data_handle.tipo.work_type.join(' OR ');
let status = "Approved";
tipoHandle.getTipos('PTW', {tipo_filter:`(work_type:${filter}) AND (status_ptw:${status})`}).then((response) => {
    var filtered = response.filter(function (el) {
                        return el != null;
    });

    if(filtered.length > 0){
        tipoHandle.presentTipoForm('Check PTW Exist Or Not','PTW','list',{ selecttipos: true, tipos: filtered, count: response['count'], single_select: true, key_field: 'tipo_id', hideActions: true, hideFilters: true, enableSelect: true, tipo_handle: this.tipoHandle, perm: response['perm']},[]).then((result) => {
            if(result && result.length > 0){
                tipoHandle.tipoInternalHandleService.startStateChange();
                tipoHandle.getTipo('WorkPlanning',data_handle.tipo.tipo_id, {}).then((res) => {
                console.log('tipoHnadle', tipoHandle)
                    res.log = (data_handle.tipo.log || '') + `<div><i> Existing PTW is  <b> Checked </b> by <b> ${tipoHandle.user_meta.name}</b>  @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')} </i></div>`;
                    res.status = 'PTW Created';
                    res.task = result[0];
                    res.permit_title = result[0].permit_title;
                    tipoHandle.tipoInternalHandleService.endStateChange();
                    tipoHandle.updateTipo('WorkPlanning',data_handle.tipo.tipo_id, res);
                })
            } else {
                    tipoHandle.showMessage('Check PTW to proceed');
            }
        })
    } else {
        // tipoHandle.getTipo('WorkPlanning',data_handle.tipo.tipo_id, {}).then((res) => {
            data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i>  Existing PTW is  <b> Checked </b> by <b> ${tipoHandle.user_meta.name}</b> @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')} </i></div>`;
            data_handle.tipo.status = 'PTW Requested';
            tipoHandle.updateTipo('WorkPlanning',data_handle.tipo.tipo_id, data_handle.tipo);
            tipoHandle.showMessage('There is no PTW associated to this record. Hence sending an email to the H&S Representative');
        // });
        const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
        const WP_LINK = domain +'#/tipo/WorkPlanning/'+ data_handle.tipo.tipo_id;
        const APP_LINK = domain +'#/login';
        const dt = data_handle.tipo.date_scheduled;
        const Date = dt ? tipoHandle.getDateUtil(dt).toString() : '';
        let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:SiteAdmin))`;
        tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
            const users = res.count > 0 ? res.map(t => t.email) : [];
            let subject = 'A New Work Plan is Created at ' + data_handle.tipo.site_labels+ '. Create PTW for this Work Plan' ;
            let body = `<div><b style="font-size: 22px;">Work Plan Details: </b> <br><br><br>
                Work Plan ID: ${data_handle.tipo.tipo_id} <br>
                Scope Of Work: ${data_handle.tipo.scope_of_work} <br> 
                Work Plan Status: ${data_handle.tipo.status} <br>
                Company: ${data_handle.tipo.client_labels} <br>
                Project: ${data_handle.tipo.site_labels} <br>
                Date: ${Date} <br>
                Description: A New Work Plan is Created, please conduct a pre-start safety meeting to 
                discuss the work to be done, the hazards involved, and the controls in place. <br><br>
                You can view the Permit to work details <a href="${WP_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`
            tipoHandle.sendEmail(users.toString(), subject, body);
            //tipoHandle.sendEmail('ashok.kumar@forwoodsafety.com', subject, body);
        })
    }
});
return true;
}


 tipoCustomScript.WorkPlanning_request_approval = function(data_handle) {
if(data_handle.tipo.crew_leader && data_handle.tipo.crew){
data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i> Work Plan Approval is <b> Requested </b> by <b> ${tipoHandle.user_meta.name}</b> @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')} </i></div>`;
data_handle.tipo.status = 'Approval Requested';
tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
    if(res){
        setTimeout(() => {
            // data_handle.formControl.get('status').setValue('Approval Requested');
            tipoHandle.showMessage('Approval Requested', '');
        }, 10);
    }
                    let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:(!SiteAdmin)))`;
    tipoHandle.getTipos('TipoFIDUser', {tipo_filter: filter}).then((response) => { 
         const users = response.count > 0 ? response.map(t => t.email) : [];
        //     const users = [];
        // users.push('kriti.srivastava@forwoodsafety.com');
        let subject = "Work Plan is Requested for Approval";
          const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
            const WP_LINK = domain +'#/tipo/WorkPlanning/'+ data_handle.tipo.tipo_id;
            let body = `<div><b style="font-size: 22px;">Work Plan details: </b> <br><br>
                    Work Plan ID: ${res.data.off_tipo_id} <br>
                    Scope Of Work: ${res.data.scope_of_work} <br> 
                    Company: ${res.data.client_labels}<br>
                    Project: ${res.data.site_labels}<br>
                    Work Plan Status:  ${res.data.status}<br><br>
                    You can view the Work plan Details <a href="${WP_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                    <i>Kind Regards, <br>
                    Forwood Safety Team</i>
                    </div>`
        sendEmail(users, subject, body);
    })
})

function sendEmail(users, subject, body) {
                const recipents_limit = 50;
                var a = users;
                while(a.length) {
                        let recipents = a.splice(0,recipents_limit);
                        tipoHandle.sendEmail(recipents.toString(), subject, body);
                }
            }
} else {
    tipoHandle.showMessage('Please fill all the required fields in the work plan.', '');
   // tipoHandle.toTipo('edit',data_handle.tipo.tipo_name,data_handle.tipo.tipo_id);
    
}
return true;
}


 tipoCustomScript.WorkPlanning_approve = function(data_handle) {
tipoHandle.presentTipoForm('','ApproverTipoForm','create',{'tipo': {}, 'hide_actions': true},[]).then((form) => {
    if(form){
        setTimeout(()=> {
            tipoHandle.showMessage('Updating, Please wait...');
        },1000)
            tipoHandle.getTipo('WorkPlanning',data_handle.tipo.tipo_id ? data_handle.tipo.tipo_id : tipoHandle.tipoInternalHandleService.getCurrentState().tipo_id, {}).then((res) => {
            res.log = (data_handle.tipo.log || '') + `<div><i> Work Plan is <b> Approved </b> by <b> ${tipoHandle.user_meta.name}</b> @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')} </i></div>`;
            res.status = 'Approved';
            res.logs = res.logs + `<div><i>${form.approved_name_approved_person_labels}</i><b> Approved</b> @ ${tipoHandle.getDateUtil().format('lll')}</div>`;
            res.approvals = {};
            res.approvals.work_plan_approvals = form;
            res.approvals.work_plan_approvals.approved_name_approved_person_labels = form.approved_name_approved_person_labels_labels;
            res.approvals.work_plan_approvals.approval_data_time = form.approval_data_time;
            res.approvals.work_plan_approvals.approved_signature = form.approved_signature;
            let filter = `(jobRoleCategory.keyword:(Supervisor) AND !(roles.keyword:SiteAdmin))`;
            tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((response) => {
            const users = response.count > 0 ? response.map(t => t.email) : [];
            // const users = [];
            // users.push("kriti.srivastava@forwoodsafety.com");
            let subject = "Work Plan application is approved";
            const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
            const WP_LINK = domain +'#/tipo/WorkPlanning/'+ data_handle.tipo.tipo_id;
            let body = `<div><b style="font-size: 22px;">Work Plan details: </b> <br><br><br>
                    Work Plan ID: ${res.off_tipo_id} <br>
                    Work Plan Title: ${res.scope_of_work} <br> 
                    Client Name: ${res.client_labels}<br>
                    Site: ${res.site_labels}<br>
                    Work Plan Status:  ${res.status}<br><br>
                    You can view the Work plan Details 
                    <span><a href="${WP_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5">here</a></span><br><br><br>
                    <i>Kind Regards, <br>
                    Forwood Safety Team</i>
                    </div>`
            sendEmail(users, subject, body);
            
        })
        tipoHandle.updateTipo('WorkPlanning',data_handle.tipo.tipo_id, res)
        .then((res1) => {
            if(res1){
                tipoHandle.routeTo(`tipo/WorkPlanning/${data_handle.tipo.tipo_id}`,{'a':'b'},true,true);
            }
        })
        })
    }
})
function sendEmail(users, subject, body) {
                const recipents_limit = 50;
                var a = users;
                while(a.length) {
                        let recipents = a.splice(0,recipents_limit);
                        tipoHandle.sendEmail(recipents.toString(), subject, body);
                }
            }
return true;
}


 tipoCustomScript.WorkPlanning_reject = function(data_handle) {
tipoHandle.presentTipoForm("Reject Reason", "RejectIaso","create", { tipo: {}, hide_actions: true }, []).then(function(result){
    if(result && result.reject_reason){
        data_handle.tipo.status = 'Rejected';
        data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i> Work Plan is <b> Rejected </b> by <b> ${tipoHandle.user_meta.name}</b> @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')} & the reject reason for this Work Plan is <b>${result.reject_reason}</b> </i></div>`;
        tipoHandle.updateTipo('WorkPlanning', data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
            if(res){
                setTimeout(() => {
                    //data_handle.formControl.get('status').setValue('Rejected');
                       tipoHandle.showMessage('Record has been rejected'); 
                },1000)
            }
            const RejectReason = result.reject_reason; 
            let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:SiteAdmin))`;
            tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((response) => {
                const users = response.count > 0 ? response.map(t => t.email) : [];
                // const users = [];
                users.push(data_handle.tipo.created_by);
                // users.push("kriti.srivastava@forwoodsafety.com")
                let subject = "Work Plan has been Rejected";
                  const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
            const WP_LINK = domain +'#/tipo/WorkPlanning/'+ data_handle.tipo.tipo_id;
            let body = `<div><b style="font-size: 22px;">Work Plan details: </b> <br><br>
                    Work Plan ID: ${res.data.off_tipo_id} <br>
                    Work Plan Title: ${res.data.scope_of_work} <br> 
                    Client Name: ${res.data.client_labels}<br>
                    Site: ${res.data.site_labels}<br>
                    Work Plan Status: ${res.data.status}<br>
                    Reject Reason: ${RejectReason} <br><br>
                    You can view the Work plan Details <a href="${WP_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                    <i>Kind Regards, <br>
                    Forwood Safety Team</i>
                    </div>`
                    sendEmail(users, subject, body);   // we commented it bcz everytime throsten is notified, uncomment it when it went to POC
                    // tipoHandle.sendEmail(data_handle.tipo.created_by, subject, body)
           });
        }); 
    }
});

function sendEmail(users, subject, body) {
    const recipents_limit = 50;
    var a = users;
    while(a.length) {
        let recipents = a.splice(0,recipents_limit);
        tipoHandle.sendEmail(recipents.toString(), subject, body);
    }
}

return true;
}


 tipoCustomScript.WorkPlanning_create_new_ptw = function(data_handle) {
console.log("routed",data_handle);
let work_type_labels= data_handle.tipo.work_type_labels;
let work_type= data_handle.tipo.work_type;
let work_plan_id = data_handle.tipo.tipo_id;
let work_created_by = data_handle.tipo.created_by;
let dataval = {'work_type_labels':work_type_labels,'work_type':work_type,'work_plan_id':work_plan_id,'created_by':work_created_by};
console.log("dataval",dataval);

tipoHandle.routeTo(`tipo/PTW/new`,{data:encodeURIComponent(JSON.stringify(dataval))});
return true;
}


 tipoCustomScript.WorkPlanning_start_review = function(data_handle) {
tipoHandle.presentTipoForm('','ExecutionApproverForm','create',{'tipo': {'name_approver':data_handle.tipo.crew_leader_labels}, 'hide_actions': true},[]).then((form) => {
  if(form){
      setTimeout(()=> {
          tipoHandle.showMessage('Updating, Please wait...','',3000);
      },10)
      tipoHandle.getTipo('WorkPlanning',data_handle.tipo.tipo_id, {}).then((res) => {
        res.work_execution_status = 'Work Reviewed';
        res.log = (data_handle.tipo.log || '') + `<div><i> Work Plan Execution is <b> Reviewed </b> by <b> ${data_handle.tipo.crew_leader_labels}</b> @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')} </i></div>`;
        res.approvals.work_execution_approvals = form;
        res.approvals.work_execution_approvals.name_approver = form.name_approver;
        res.approvals.work_execution_approvals.signature_of_approver = form.signature_of_approver;
        res.approvals.work_execution_approvals.date_and_time = form.date_and_time;
        tipoHandle.updateTipo('WorkPlanning',data_handle.tipo.tipo_id, res).then((response) => {
            if(response){
                tipoHandle.routeTo(`tipo/WorkPlanning/${data_handle.tipo.tipo_id}`);
            }
        })
      })
  }
})
return true;
}


 tipoCustomScript.WorkPlanning_start_work_execution = function(data_handle) {
data_handle.tipo.work_execution_status = 'Work Execution Started';
data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i> Work Plan Execution is <b> Started </b> by <b> ${tipoHandle.user_meta.name}</b> @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')}  </i></div>`;
tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id,data_handle.tipo).then(()=>{
              tipoHandle.showMessage('Work Execution Started', '');
              tipoHandle.toTipo('edit',data_handle.tipo_name,data_handle.tipo.tipo_id);
                setTimeout(() => {
                      document.querySelector('.mat-step-header[aria-posinset="4"]').click();
                }, 1000);
});
return true;
}


 tipoCustomScript.WorkPlanning_hednoiaso_loc_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.client = new_val.client && new_val.client[0];
data_handle.tipo.client_labels =new_val.client_labels && new_val.client_labels[0] !== "Forwood Safety" ? new_val.client_labels[0] : new_val.company_labels[0];
data_handle.tipo.company = new_val.company && new_val.company[0];
data_handle.tipo.company_labels = new_val.company_labels && new_val.company_labels[0];
data_handle.tipo.forwood_level = new_val.forwood_level && new_val.forwood_level[0];
data_handle.tipo.forwood_level_labels = new_val.forwood_level_labels && new_val.forwood_level_labels[0];
data_handle.tipo.structure = new_val.structure && new_val && new_val.structure[0];
data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
}

 tipoCustomScript.WorkPlanning_crew_leader_OnChange  = function(data_handle) {
data_handle.tipo.task.crew_leaders_data = [data_handle.tipo.crew_leader, ...data_handle.tipo.crew];
// data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i> Crew Leader is <b> Selected </b> by <b> ${tipoHandle.user_meta.name}</b>  @ ${tipoHandle.getDateUtil().format('lll')} & ${data_handle.old_value? 'Previous Crew Leader value is seleced as' + data_handle.old_value: ''} & Current Crew Leader Value is selected as <b>${data_handle.new_value}</b> </i></div>`;
// tipoHandle.updateTipo('WorkPlanning',data_handle.tipo.tipo_id,data_handle.tipo);
}

 tipoCustomScript.WorkPlanning_crew_OnChange  = function(data_handle) {
data_handle.tipo.task.crew_leaders_data = [data_handle.tipo.crew_leader, ...data_handle.tipo.crew];
}

 tipoCustomScript.WorkPlanning_task_appove_ptw = function(data_handle) {
console.log("approve",data_handle);
data_handle.tipo.status_ptw = 'Approved';
tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id,data_handle.tipo).then((response)=> {
    tipoHandle.showMessage('PTW Approved');
    if(data_handle.tipo.work_plan_id) {
        const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
        const PTW_LINK = domain +'#/tipo/PTW/'+ response.data.tipo_id;
        let user = response.data.created_by;
        let subject = 'A PTW has been Approved.';
        let body = `<div><b style="font-size: 22px;">Permit to Work Details: </b> <br><br>
                    Permit to Work ID: ${response.data.tipo_id} <br>
                    Permit Title: ${response.data.permit_title} <br> 
                    Permit to Work Status: ${response.data.status_ptw} <br>
                    Description: A PTW is Approved, please conduct a pre-start safety meeting to 
                    discuss the work to be done, the hazards involved, and the controls in place. <br><br>
                    You can view the Work plan Details <a href="${PTW_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                    <i>Kind Regards, <br>
                    Forwood Safety Team</i>
                    </div>`
        tipoHandle.sendEmail(user, subject, body);
    
        tipoHandle.getTipo('WorkPlanning',data_handle.tipo.work_plan_id,{}).then((res)=>{
            console.log("res",res);
            res.status = 'PTW Created';
            res.ptw_id = response.data.tipo_id;
            res.task = response.data;
            tipoHandle.updateTipo('WorkPlanning',res.tipo_id,res).then((result)=> {
                    tipoHandle.toTipo('view','WorkPlanning',result.data.tipo_id);
            });
        });
    }
});
return true;
}


 tipoCustomScript.WorkPlanning_task_reject_ptw = function(data_handle) {
tipoHandle.presentTipoForm("Reject Reason", "RejectReason","create", { tipo: {}, hide_actions: true }, []).then(function(result){
    if(result && result.reject_reason){
//     // Success function
        const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
        const PTW_LINK = domain +'#/tipo/PTW/'+ data_handle.tipo.tipo_id;
        const APP_LINK = domain +'#/login';
        let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:SiteAdmin))`;
        tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
            // const users = res.count > 0 ? res.map(t => t.email) : [];
            const users = [];
            users.push('mohit.gupta@forwoodsafety.com, ashok.kumar@forwoodsafety.com')
            let subject = 'The PTW has been Rejected';
            let body = `<div><b style="font-size: 22px;">Permit to Work Details: </b> <br><br><br>
                Permit to Work ID: ${data_handle.tipo.tipo_id} <br>
                Permit Title: ${data_handle.tipo.permit_title} <br> 
                Permit to Work Status: ${data_handle.tipo.status_ptw} <br>
                Reject Reason: ${result.reject_reason} <br>
                Description:  The PTW is Rejected and reject reason is ${result.reject_reason} <br><br>
                You can view the PTW details here <a href=" ${PTW_LINK} " target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`;
            //tipoHandle.sendEmail('satest@forwoodsafety.com', subject, body);
            tipoHandle.sendEmail(users.toString(), subject, body);

        })
                tipoHandle.showMessage('PTW Rejected', '');
            data_handle.tipo.status_ptw = 'Rejected';
            tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
                console.log(data_handle)
                })
        }
})
    
return true;
}


 tipoCustomScript.WorkPlanning_task_request_approval_ptw = function(data_handle) {
data_handle.tipo.status_ptw = 'Approval Requested';
tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id,data_handle.tipo).then(()=>{
    tipoHandle.showMessage('Approval Requested');
});

// Notification
const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
const PTW_LINK = domain +'#/tipo/PTW/'+ data_handle.tipo.tipo_id;
const APP_LINK = domain +'#/login';
let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:(!SiteAdmin)))`;
tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
    const users = res.count > 0 ? res.map(t => t.email) : [];
    let subject = 'A PTW has been Requested for Approval.';
    let body = `<div><b style="font-size: 22px;">Permit to Work Details: </b> <br><br><br>
                Permit to Work ID: ${data_handle.tipo.tipo_id} <br>
                Permit Title: ${data_handle.tipo.permit_title} <br> 
                Permit to Work Status: ${data_handle.tipo.status_ptw} <br>
                Description: The approval is required for a PTW, Request that you take an investigation and update it. <br><br>
                You can view the PTW details here <a href="${PTW_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`;
            // tipoHandle.sendEmail('satest@forwoodsafety.com', subject, body);
            tipoHandle.sendEmail(users.toString(), subject, body);

        })

return true;
}


 tipoCustomScript.WorkPlanning_task_tasks_tool_category_OnChange  = function(data_handle) {
let selectedTool = data_handle.new_value ? data_handle.new_value.join(' OR ') : '';
if(selectedTool !== ''){
    let newtool = selectedTool.replace('Process Check', 'process_check').replace('CCV', 'control').replace('Hazard ID', 'hazard').replace('Permit', 'permit').replace('Pre-start', 'pre_start');
    if(data_handle.tipo_name === 'WorkPlanning') {
        let index_work_planing = _.findIndex(data_handle.tipo.task.tasks, function(o) { return o.checklist === data_handle.context.checklist; });
        if(index_work_planing>=0) {
            data_handle.tipo.task.tasks[index_work_planing].selected_categary = newtool;
            data_handle.formControl.controls.task.controls.tasks.controls[index_work_planing].get('selected_categary').setValue(newtool);
        }
    } else {
        let index = _.findIndex(data_handle.tipo.tasks, function(o) { return o.checklist === data_handle.context.checklist; });
        if(index >= 0) {
            data_handle.tipo.tasks[index].selected_categary = newtool;
            console.log(data_handle.formControl.get(`tasks[${index}].selected_categary`));
            data_handle.formControl.controls.tasks.controls[index].get('selected_categary').setValue(newtool);
        }
    }
} else {
    let index = _.findIndex(data_handle.tipo.tasks, function(o) { return o.checklist === data_handle.context.checklist; });
        if(index >= 0) {
            data_handle.tipo.tasks[index].selected_categary = selectedTool;
            console.log(data_handle.formControl.get(`tasks[${index}].selected_categary`));
            data_handle.formControl.controls.tasks.controls[index].get('selected_categary').setValue(selectedTool);
            data_handle.formControl.controls.tasks.controls[index].get('tool').reset();            
            data_handle.formControl.controls.tasks.controls[index].get('tool_labels').reset();          
            }
}


return true;
}

 tipoCustomScript.WorkPlanning_task_tasks_assignee_BeforeLookup = function(data_handle) {
if(tipoHandle.tipoInternalHandleService.getCurrentState().tipo_name !== 'PTW'){
    data_handle.root.crew_members = [data_handle.root.crew_leader, ...data_handle.root.crew];
    let crew_filter = data_handle.root.crew_members.join(' OR ');
    data_handle.query_params.tipo_filter = "email.keyword:("+crew_filter+") AND (tipo_id:(*) OR longDisplayName:(*))";
    console.log(data_handle);
}
}

 tipoCustomScript.WorkPlanning_task_tasks_participants_BeforeLookup = function(data_handle) {
if(tipoHandle.tipoInternalHandleService.getCurrentState().tipo_name !== 'PTW'){
    data_handle.root.crew_members = [data_handle.root.crew_leader, ...data_handle.root.crew];
    let crew_filter = data_handle.root.crew_members.join(' OR ');
    data_handle.query_params.tipo_filter = "email.keyword:("+crew_filter+") AND (tipo_id:(*) OR longDisplayName:(*))";
    console.log(data_handle);
}
}

 tipoCustomScript.WorkPlanning_OnSave  = function(data_handle) {
console.log('data', data_handle);
if(!data_handle.formControl.valid) {
    tipoHandle.showMessage('Please fill in all the required fields before submitting the form.', '');
    return true;  
}
if(data_handle.mode === 'create'){
    
    data_handle.tipo.status = 'Submitted';
    data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i> Work Plan is <b> Created </b> by <b> ${tipoHandle.user_meta.name}</b> @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')} </i></div>`;
    data_handle.tipo.checkptwexists = tipoHandle.user_meta.email;
} if(data_handle.mode === 'edit' && data_handle.tipo.status === 'Rejected'){
    data_handle.tipo.status = 'PTW Created'
}
// if(data_handle.mode === 'edit'){
//     tipoHandle.getTipo('PTW', data_handle.tipo.ptw_id).then((res) => {
//         res.crew_leaders_data = data_handle.tipo.crew_members;
//         tipoHandle.updateTipo('PTW', data_handle.tipo.ptw_id, res);
//     })
// }

// Code for Work Execution

if(data_handle.mode === 'edit' && data_handle.tipo.work_execution_status === 'Work Execution Started' && data_handle.formControl.valid){
    tipoHandle.getConfirmation('Confirmation', 'Are all steps of work execution completed?').then(function(result){
        if (result) {
            data_handle.tipo.work_execution_status = 'Work Complete';
            data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i> Work Plan Execution is <b>Completed</b> by <b> ${tipoHandle.user_meta.name}</b> @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')}  </i></div>`;
            tipoHandle.updateTipo('WorkPlanning',data_handle.tipo.tipo_id,data_handle.tipo).then(()=>{
                data_handle.formControl.get('work_execution_status').setValue('Work Complete');
                tipoHandle.showMessage('Work Execution Completed', '');
            });
        } else{
            data_handle.tipo.work_execution_status = 'Work Incomplete';
            data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i> Work Plan Execution is mark as <b>Incomplete</b> by <b> ${tipoHandle.user_meta.name}</b> @ ${data_handle.tipo.site_labels} on ${tipoHandle.getDateUtil().format('lll')}  </i></div>`;
            tipoHandle.updateTipo('WorkPlanning',data_handle.tipo.tipo_id,data_handle.tipo).then(()=>{
                data_handle.formControl.get('work_execution_status').setValue('Work Incomplete');
                tipoHandle.showMessage('Work Execution is Incomplete', '');

            });

        }
    
    });
   
}


// if(data_handle.mode === 'edit' && data_handle.tipo.work_execution_status === 'Work Execution Started' && data_handle.formControl.valid){
//     tipoHandle.getConfirmation('Confirmation', 'Are all steps of work execution completed?').then(function(result){
//         if (result) {
//             data_handle.tipo.work_execution_status = 'Work Complete';
//             data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i> Work Execution is <b>Completed</b> by <b> ${tipoHandle.user_meta.name}</b>  @ ${tipoHandle.getDateUtil().format('lll')}  </i></div>`;
//             tipoHandle.showMessage('Work Execution Completed', '');
            
//         } else{
//             data_handle.tipo.work_execution_status = 'Work Incomplete';
//             tipoHandle.showMessage('Work Execution is Incomplete', '');
//             data_handle.tipo.log = (data_handle.tipo.log || '') + `<div><i> Work Execution is mark as <b>Incomplete</b> by <b> ${tipoHandle.user_meta.name}</b>  @ ${tipoHandle.getDateUtil().format('lll')}  </i></div>`;


//         }
    
//     });
   
// }
}

 tipoCustomScript.WorkPlanning_OnView  = function(data_handle) {
console.log('workPlanning Onview', data_handle);
if(data_handle.tipo.permit_locn.length < 1) {
    data_handle.tipo.locn_text = "-N/A-"
}
}

 tipoCustomScript.WorkPlanning_OnList  = function(data_handle) {
console.log("list",data_handle)
}

//___WorkPlanning___
//___ApproverTipoForm___

 tipoCustomScript.ApproverTipoForm_OnSave  = function(data_handle) {
if(data_handle.mode === 'create') {
    data_handle.tipo.status = 'Approved';
}
console.log(data_handle, ": Tipo ApproverTipoForm event")
}

 tipoCustomScript.ApproverTipoForm_OnView  = function(data_handle) {
console.log(data_handle, ": on View approval form");
let d = new Date();
let currentDate = d.toISOString();
console.log(currentDate)
data_handle.tipo.approval_data_time = currentDate;
}

//___ApproverTipoForm___
//___HazardChecklist___

 tipoCustomScript.HazardChecklist_choose_locn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.tipo_filter = 'hierarchy.__all__keys.keyword:(' + _.join(new_val.__all__keys, ' OR ') +')';
data_handle.tipo.business_unit = new_val.business_unit && new_val.business_unit[0];
data_handle.tipo.business_unit_labels = new_val.business_unit_labels && new_val.business_unit_labels[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.tsf_name = new_val.tsf_name && new_val.tsf_name[0];
data_handle.tipo.tsf_name_labels = new_val.tsf_name_labels && new_val.tsf_name_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];
data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
}

 tipoCustomScript.HazardChecklist_list_copy = function(data_handle) {
const params = {
    copyFrom: data_handle.selected_tipo_ids[0],
}
const url = `/tipo/${data_handle.tipo_name}/new`;
tipoHandle.routeTo(url,params,true,true);
return true;
}


 tipoCustomScript.HazardChecklist_list_import_data = function(data_handle) {
tipoHandle.presentTipoForm('Import data', 'TipoImportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


 tipoCustomScript.HazardChecklist_list_export_data = function(data_handle) {
tipoHandle.presentTipoForm('Export data', 'TipoExportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


//___HazardChecklist___
//___CreateHazardVerification___

 tipoCustomScript.CreateHazardVerification_tipo_id_OnChange  = function(data_handle) {
console.log(data_handle);
tipo_filter = '(site:'+ data_handle.tipo.site + '|| structure:'+ data_handle.tipo.structure +')';
}

 tipoCustomScript.CreateHazardVerification_choose_locn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.tipo_filter = new_val.__all__keys;
data_handle.tipo.business_unit = new_val.business_unit && new_val.business_unit[0];
data_handle.tipo.business_unit_labels = new_val.business_unit_labels && new_val.business_unit_labels[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.tsf_name = new_val.tsf_name && new_val.tsf_name[0];
data_handle.tipo.tsf_name_labels = new_val.tsf_name_labels && new_val.tsf_name_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];

data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
}

 tipoCustomScript.CreateHazardVerification_OnList  = function(data_handle) {
tipoHandle.toTipo('create', 'CreateRiskVerifications');
}

//___CreateHazardVerification___
//___PTW___

 tipoCustomScript.PTW_appove_ptw = function(data_handle) {
console.log("approve",data_handle);
data_handle.tipo.status_ptw = 'Approved';
tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id,data_handle.tipo).then((response)=> {
    tipoHandle.showMessage('PTW Approved');
    if(data_handle.tipo.work_plan_id) {
        const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
        const PTW_LINK = domain +'#/tipo/PTW/'+ response.data.tipo_id;
        let user = response.data.created_by;
        let subject = 'A PTW has been Approved.';
        let body = `<div><b style="font-size: 22px;">Permit to Work Details: </b> <br><br>
                    Permit to Work ID: ${response.data.tipo_id} <br>
                    Permit Title: ${response.data.permit_title} <br> 
                    Permit to Work Status: ${response.data.status_ptw} <br>
                    Description: A PTW is Approved, please conduct a pre-start safety meeting to 
                    discuss the work to be done, the hazards involved, and the controls in place. <br><br>
                    You can view the Work plan Details <a href="${PTW_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                    <i>Kind Regards, <br>
                    Forwood Safety Team</i>
                    </div>`
        tipoHandle.sendEmail(user, subject, body);
    
        tipoHandle.getTipo('WorkPlanning',data_handle.tipo.work_plan_id,{}).then((res)=>{
            console.log("res",res);
            res.status = 'PTW Created';
            res.ptw_id = response.data.tipo_id;
            res.task = response.data;
            tipoHandle.updateTipo('WorkPlanning',res.tipo_id,res).then((result)=> {
                    tipoHandle.toTipo('view','WorkPlanning',result.data.tipo_id);
            });
        });
    }
});
return true;
}


 tipoCustomScript.PTW_reject_ptw = function(data_handle) {
tipoHandle.presentTipoForm("Reject Reason", "RejectReason","create", { tipo: {}, hide_actions: true }, []).then(function(result){
    if(result && result.reject_reason){
//     // Success function
        const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
        const PTW_LINK = domain +'#/tipo/PTW/'+ data_handle.tipo.tipo_id;
        const APP_LINK = domain +'#/login';
        let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:SiteAdmin))`;
        tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
            // const users = res.count > 0 ? res.map(t => t.email) : [];
            const users = [];
            users.push('mohit.gupta@forwoodsafety.com, ashok.kumar@forwoodsafety.com')
            let subject = 'The PTW has been Rejected';
            let body = `<div><b style="font-size: 22px;">Permit to Work Details: </b> <br><br><br>
                Permit to Work ID: ${data_handle.tipo.tipo_id} <br>
                Permit Title: ${data_handle.tipo.permit_title} <br> 
                Permit to Work Status: ${data_handle.tipo.status_ptw} <br>
                Reject Reason: ${result.reject_reason} <br>
                Description:  The PTW is Rejected and reject reason is ${result.reject_reason} <br><br>
                You can view the PTW details here <a href=" ${PTW_LINK} " target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`;
            //tipoHandle.sendEmail('satest@forwoodsafety.com', subject, body);
            tipoHandle.sendEmail(users.toString(), subject, body);

        })
                tipoHandle.showMessage('PTW Rejected', '');
            data_handle.tipo.status_ptw = 'Rejected';
            tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
                console.log(data_handle)
                })
        }
})
    
return true;
}


 tipoCustomScript.PTW_request_approval_ptw = function(data_handle) {
data_handle.tipo.status_ptw = 'Approval Requested';
tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id,data_handle.tipo).then(()=>{
    tipoHandle.showMessage('Approval Requested');
});

// Notification
const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
const PTW_LINK = domain +'#/tipo/PTW/'+ data_handle.tipo.tipo_id;
const APP_LINK = domain +'#/login';
let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:(!SiteAdmin)))`;
tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
    const users = res.count > 0 ? res.map(t => t.email) : [];
    let subject = 'A PTW has been Requested for Approval.';
    let body = `<div><b style="font-size: 22px;">Permit to Work Details: </b> <br><br><br>
                Permit to Work ID: ${data_handle.tipo.tipo_id} <br>
                Permit Title: ${data_handle.tipo.permit_title} <br> 
                Permit to Work Status: ${data_handle.tipo.status_ptw} <br>
                Description: The approval is required for a PTW, Request that you take an investigation and update it. <br><br>
                You can view the PTW details here <a href="${PTW_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`;
            // tipoHandle.sendEmail('satest@forwoodsafety.com', subject, body);
            tipoHandle.sendEmail(users.toString(), subject, body);

        })

return true;
}


 tipoCustomScript.PTW_tasks_tool_category_OnChange  = function(data_handle) {
let selectedTool = data_handle.new_value ? data_handle.new_value.join(' OR ') : '';
if(selectedTool !== ''){
    let newtool = selectedTool.replace('Process Check', 'process_check').replace('CCV', 'control').replace('Hazard ID', 'hazard').replace('Permit', 'permit').replace('Pre-start', 'pre_start');
    if(data_handle.tipo_name === 'WorkPlanning') {
        let index_work_planing = _.findIndex(data_handle.tipo.task.tasks, function(o) { return o.checklist === data_handle.context.checklist; });
        if(index_work_planing>=0) {
            data_handle.tipo.task.tasks[index_work_planing].selected_categary = newtool;
            data_handle.formControl.controls.task.controls.tasks.controls[index_work_planing].get('selected_categary').setValue(newtool);
        }
    } else {
        let index = _.findIndex(data_handle.tipo.tasks, function(o) { return o.checklist === data_handle.context.checklist; });
        if(index >= 0) {
            data_handle.tipo.tasks[index].selected_categary = newtool;
            console.log(data_handle.formControl.get(`tasks[${index}].selected_categary`));
            data_handle.formControl.controls.tasks.controls[index].get('selected_categary').setValue(newtool);
        }
    }
} else {
    let index = _.findIndex(data_handle.tipo.tasks, function(o) { return o.checklist === data_handle.context.checklist; });
        if(index >= 0) {
            data_handle.tipo.tasks[index].selected_categary = selectedTool;
            console.log(data_handle.formControl.get(`tasks[${index}].selected_categary`));
            data_handle.formControl.controls.tasks.controls[index].get('selected_categary').setValue(selectedTool);
            data_handle.formControl.controls.tasks.controls[index].get('tool').reset();            
            data_handle.formControl.controls.tasks.controls[index].get('tool_labels').reset();          
            }
}


return true;
}

 tipoCustomScript.PTW_tasks_assignee_BeforeLookup = function(data_handle) {
if(tipoHandle.tipoInternalHandleService.getCurrentState().tipo_name !== 'PTW'){
    data_handle.root.crew_members = [data_handle.root.crew_leader, ...data_handle.root.crew];
    let crew_filter = data_handle.root.crew_members.join(' OR ');
    data_handle.query_params.tipo_filter = "email.keyword:("+crew_filter+") AND (tipo_id:(*) OR longDisplayName:(*))";
    console.log(data_handle);
}
}

 tipoCustomScript.PTW_tasks_participants_BeforeLookup = function(data_handle) {
if(tipoHandle.tipoInternalHandleService.getCurrentState().tipo_name !== 'PTW'){
    data_handle.root.crew_members = [data_handle.root.crew_leader, ...data_handle.root.crew];
    let crew_filter = data_handle.root.crew_members.join(' OR ');
    data_handle.query_params.tipo_filter = "email.keyword:("+crew_filter+") AND (tipo_id:(*) OR longDisplayName:(*))";
    console.log(data_handle);
}
}

 tipoCustomScript.PTW_OnView  = function(data_handle) {
data_handle.tipo.work_type_filter = data_handle.tipo.work_type.join(' OR ');
data_handle.tipo.checkptwtipo = tipoHandle.tipoInternalHandleService.getCurrentState().tipo_name;
}

 tipoCustomScript.PTW_PostServerSave  = function(data_handle) {
if(data_handle.mode === 'create') {
    console.log(data_handle, ">>>>")
    const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
    const PTW_LINK = domain +'#/tipo/PTW/'+ data_handle.tipo.tipo_id;
    const APP_LINK = domain +'#/login';
    let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:(!SiteAdmin)))`;
    tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
        const users = res.count > 0 ? res.map(t => t.email) : [];
        let subject = 'A new PTW has been created';
        let body = `<div><b style="font-size: 22px;">Permit to Work Details: </b> <br><br><br>
                    Permit to Work ID: ${data_handle.tipo.tipo_id} <br>
                    Permit Title: ${data_handle.tipo.permit_title} <br> 
                    Permit to Work Status: ${data_handle.tipo.status_ptw} <br>
                    Description: A new PTW is created, request you to kindly update it. <br><br>
                    You can view the PTW details here <a href="${PTW_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                    <i>Kind Regards, <br>
                    Forwood Safety Team</i>
                    </div>`;
        //tipoHandle.sendEmail('satest@forwoodsafety.com', subject, body);
                tipoHandle.sendEmail(users.toString(), subject, body);

        })
}
}

 tipoCustomScript.PTW_OnSave  = function(data_handle) {
console.log(data_handle, ": PTW Tipo");
if(data_handle.formControl.valid) {
    if(data_handle.formControl.value.tasks.length > 0){
        data_handle.tipo.status_ptw = 'Approval Requested';
        tipoHandle.getTipo('WorkPlanning',data_handle.tipo.work_plan_id).then((response)=>{
            response.permit_title = data_handle.tipo.permit_title;
            response.status = 'PTW Initiated';
            tipoHandle.updateTipo('WorkPlanning',data_handle.tipo.work_plan_id,response)
        })
    }
    else {
        tipoHandle.showMessage('Minimum one step is required', '');
        return true;
    }
} 
else {
    tipoHandle.showMessage('Please fill all the required fields and atleast one checklist', '');
}
}

//___PTW___
//___Task___

 tipoCustomScript.Task_tool_category_OnChange  = function(data_handle) {
console.log(data_handle);
}

 tipoCustomScript.Task_tool_OnChange  = function(data_handle) {
console.log(data_handle);
}

//___Task___
//___CreateIncident___

 tipoCustomScript.CreateIncident_approve_private = function(data_handle) {
// code is added to send email notification when investingation finalized
tipoHandle.tipoInternalHandleService.tipoDataService.getTipo('CreateIncident', data_handle.tipo.tipo_id, {}, true, undefined, undefined, true, true).subscribe();
if (data_handle.tipo.overview_incident_status___token === 'TT___UNDER_REVIEW'  && data_handle.tipo.confirmations.filter(item => item.Investigation_finalised === true)) {
    data_handle.tipo.overview_incident_status___token = 'TT___FINAL';
    tipoHandle.updateTipo('CreateIncident', data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
        if (res) {
            tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___THE_REPORTED_INCIDENT_FINALIZED_INCID')+ ' ' +  data_handle.tipo.tipo_id, '');
                data_handle.formControl.get('overview_incident_status___token').setValue('TT___FINAL');
                // Code is added to send email notification close of any incident
   const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
   const INCIDENT_LINK = domain +'#/tipo/CreateIncident/'+ data_handle.tipo.tipo_id;
   const APP_LINK = domain +'#/login';
   const Incident_Number = data_handle.tipo.tipo_id;
   const Incident_Status = data_handle.tipo.overview_incident_status;
   const Incident_Type = data_handle.tipo.incident_type_labels.toString();
   const Short_Description = data_handle.tipo.what_briefly_describe_the_incident;
   const Investigation_Completed = data_handle.tipo.investigation_completed_ ? 'Yes' : 'No';
   const Company = data_handle.tipo.client_labels;
   const Region = data_handle.tipo.company_labels;
   const Area = data_handle.tipo.site_labels;
   const dt = data_handle.tipo.when_date_and_time_of_incident;
   const Date = dt ? tipoHandle.getDateUtil(dt).toString() : '';
   
        // let filter = `(site_or_company:${data_handle.tipo.where_incidentlocn.site[0]} AND status:ACTIVE AND (jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin)))`;
           let filter = `(site_or_company:${data_handle.tipo.where_incidentlocn.company[0]} AND status:ACTIVE AND (jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin)))`;
        tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
            console.log(res, '=====');
            let  updatedUsers, allUsers= [];
            const users = res.count > 0 ? res.map(t => t.email) : [];
            if (data_handle.tipo.who_Team.notify_responsible_persons ) {
                updatedUsers = [ data_handle.tipo.who_Team.responsible_manager];
                allUsers = [...users, ...updatedUsers];
            } else {
                allUsers = [...users];
            }
            let subject = 'An incident is finalized at '+Region+ ' for ' +Short_Description;
                        let body = '<html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> </head> <body> <div> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"><h4>Incident Details:</h4> <div> Incident Number: ' + Incident_Number + '</div> <div> Incident Status: ' + Incident_Status + '</div> <div>Incident Type: '+Incident_Type+'</div><div>Company: '+ Company+'</div> <div> Project: '+ Region+'</div> <div>Date: '+ Date+'</div> <div> Description: '+Short_Description+'</div>   You can view the incident details <a href="' + INCIDENT_LINK + '" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a >.</span > </p> <br> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Kind regards,</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Forwood Safety Team</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" ><a href="' + APP_LINK + '" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="6" >Forwood Safety Portal</a ></span > </p> <br> <hr/> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"> <span style="color: black" ><br />Please note that for security reasons <b>you need to be logged into the portal</b> in order to use any direct links presented in this email.<br />After logging into the portal you can click on the link(s) to access the respective page(s).<br /><br />This is an automated message from the Forwood Safety Portal.<br />Please do not reply to this message. </span> </p> </div> </body></html>';
      sendEmail(allUsers, subject, body);
        });

   
   function sendEmail(users, subject, body) {
    
       console.log(users, subject, body);
       const recipents_limit = 50;
           var a = _.uniq(users);
           while(a.length) {
               let recipents = a.splice(0,recipents_limit);
               console.log(recipents.toString());
               tipoHandle.sendEmail(recipents.toString(), subject, body);
           }
   }
  
        } 

    })
} 
return true;
}


 tipoCustomScript.CreateIncident_investigate = function(data_handle) {
data_handle.tipo.overview_incident_status___token = 'TT___UNDER_INVESTIGATION';
tipoHandle.updateTipo('CreateIncident', data_handle.tipo.tipo_id, data_handle.tipo,true, true).then((res) => {
    if (res) {
        setTimeout(() => {
            tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___SUCCESSFULLY_MARKED_AS_UNDER_INVESTIGATI') + data_handle.tipo.tipo_id , '');
            data_handle.formControl.get('overview_incident_status___token').setValue('TT___UNDER_INVESTIGATION');
            tipoHandle.getTipo('CreateIncident', data_handle.tipo.tipo_id).then((res) => {
                tipoHandle.toTipo('edit',data_handle.tipo.tipo_name,data_handle.tipo.tipo_id);
            })
        }, 1000);
        
    }
});

   return true;
}


 tipoCustomScript.CreateIncident_reject = function(data_handle) {
tipoHandle.tipoInternalHandleService.tipoDataService.getTipo('CreateIncident', data_handle.tipo.tipo_id, {}, true, undefined, undefined, true, true).subscribe();
data_handle.tipo.overview_incident_status___token = 'TT___UNDER_INVESTIGATION';

tipoHandle.presentTipoForm("Reject Reason", "RejectIncident","create", { tipo: {}, hide_actions: true }, []).then(function(res){
    console.log('***', res);
    // Success function
   const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
   const INCIDENT_LINK = domain +'#/tipo/CreateIncident/'+ data_handle.tipo.tipo_id;
   const APP_LINK = domain +'#/login';
   const Incident_Number = data_handle.tipo.tipo_id;
   const Incident_Type = data_handle.tipo.incident_type_labels.toString();
   const Short_Description = data_handle.tipo.what_briefly_describe_the_incident;
   const Incident_Status = data_handle.tipo.overview_incident_status;
   const Investigation_Completed = data_handle.tipo.investigation_completed_ ? 'Yes' : 'No';
   const Company = data_handle.tipo.client_labels;
   const Region = data_handle.tipo.company_labels;
   const Area = data_handle.tipo.site_labels;
   const dt = data_handle.tipo.when_date_and_time_of_incident;
   const Date = dt ? tipoHandle.getDateUtil(dt).toString() : '';
   const RejectReason = res.reject_reason;
   let result = (data_handle.tipo.confirmations||[]).map(item => item.addperson_PersonDetails); 
   //const users = result.count > 0 ? result.map(t => t.email) : [];
    // let filter = `(site_or_company:${data_handle.tipo.where_incidentlocn.site[0]} AND status:ACTIVE AND (jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin)))`;
       let filter = `(site_or_company:${data_handle.tipo.where_incidentlocn.company[0]} AND status:ACTIVE AND (jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin)))`;
    tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
        console.log(res, '=====');
        let  updatedUsers, allUsers= [];
        const users = res.count > 0 ? res.map(t => t.email) : [];
        if (data_handle.tipo.who_Team.notify_responsible_persons ) {
            updatedUsers = [ data_handle.tipo.who_Team.responsible_manager];
            allUsers = [...users, ...updatedUsers];
        } else {
            allUsers = [...users];
        }
        let subject = 'An Incident submitted has been Rejected';
                let body = '<html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> </head> <body> <div> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"><h4>Incident Details:</h4> <div> Incident Number: '+ Incident_Number+'</div> <div> Incident Status: '+ Incident_Status+'</div> <div>Incident Type: '+Incident_Type+'</div><div>Company: '+ Company+'</div> <div> Project: '+ Region+'</div> <div>Date: '+ Date+'</div> <div> Description: '+Short_Description+'</div>  <p> <div>The incident is rejected & reject reason is <b> '+RejectReason+' </b>. </div> </p> You can view the incident details <a href="'+ INCIDENT_LINK +'" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a >.</span > </p> <br> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Kind regards,</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Forwood Safety Team</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" ><a href="'+APP_LINK+'" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="6" >Forwood Safety Portal</a ></span > </p> <br> <hr/> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"> <span style="color: black" ><br />Please note that for security reasons <b>you need to be logged into the portal</b> in order to use any direct links presented in this email.<br />After logging into the portal you can click on the link(s) to access the respective page(s).<br /><br />This is an automated message from the Forwood Safety Portal.<br />Please do not reply to this message. </span> </p> </div> </body></html>';            
  sendEmail(allUsers, subject, body);
        //let subject = 'An Incident submitted has been Rejected';
        tipoHandle.updateTipo('CreateIncident', data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
            if (res) {
                setTimeout(() => {
                    tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___INVESTIGATION_REPORT_REJECTED_INCIDENT_I') + data_handle.tipo.tipo_id , '');
                    data_handle.formControl.get('overview_incident_status___token').setValue('TT___UNDER_INVESTIGATION');
                    tipoHandle.getTipo('CreateIncident', data_handle.tipo.tipo_id);
                }, 1000);
            }
        });
   });
});
  

function sendEmail(users, subject, body) {
       console.log(users, subject, body);
       const recipents_limit = 50;
           var a = _.uniq(users);
           while(a.length) {
               let recipents = a.splice(0,recipents_limit);
               console.log(recipents.toString());
               tipoHandle.sendEmail(recipents.toString(), subject, body);
           }
   }

return true;
}


 tipoCustomScript.CreateIncident_close = function(data_handle) {
tipoHandle.tipoInternalHandleService.tipoDataService.getTipo('CreateIncident', data_handle.tipo.tipo_id, {}, true, undefined, undefined, true, true).subscribe();
if (data_handle.tipo.overview_incident_status___token === 'TT___FINAL'  && data_handle.tipo.overview_outstanding_actions == 0 ) {
    data_handle.tipo.overview_incident_status___token = 'TT___CLOSED';
    tipoHandle.updateTipo('CreateIncident', data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
        if (res) {
                tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___REPORTED_INCIDENT_CLOSED_INCIDENT_ID') + data_handle.tipo.tipo_id , '');
                data_handle.formControl.get('overview_incident_status___token').setValue('TT___CLOSED');
                tipoHandle.getTipo('CreateIncident', data_handle.tipo.tipo_id);
                // Code is added to send email notification close of any incident
const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
   const INCIDENT_LINK = domain +'#/tipo/CreateIncident/'+ data_handle.tipo.tipo_id;
   const APP_LINK = domain +'#/login';
   const Incident_Number = data_handle.tipo.tipo_id;
   const Incident_Status = data_handle.tipo.overview_incident_status;
   const Incident_Type = data_handle.tipo.incident_type_labels.toString();
   const Short_Description = data_handle.tipo.what_briefly_describe_the_incident;
   const Investigation_Completed = data_handle.tipo.investigation_completed_ ? 'Yes' : 'No';
   const Company = data_handle.tipo.client_labels;
   const Region = data_handle.tipo.company_labels;
   const Area = data_handle.tipo.site_labels;
   const dt = data_handle.tipo.when_date_and_time_of_incident;
   const Date = dt ? tipoHandle.getDateUtil(dt).toString() : '';
   
        // let filter = `(site_or_company:${data_handle.tipo.where_incidentlocn.site[0]} AND status:ACTIVE AND (jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin)))`;
          let filter = `(site_or_company:${data_handle.tipo.where_incidentlocn.company[0]} AND status:ACTIVE AND (jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin)))`;
        tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
            console.log(res, '=====');
            let updatedUsers, allUsers= [];
            const users = res.count > 0 ? res.map(t => t.email) : [];
            if (data_handle.tipo.who_Team.notify_responsible_persons ) {
                updatedUsers = [ data_handle.tipo.who_Team.responsible_manager];
                allUsers = [...users, ...updatedUsers];
            } else {
                allUsers = [...users];
            }
                  let subject = 'An Incident has been closed at ' + Region + ' for ' + Short_Description + '';
               let body = '<html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> </head> <body> <div> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"> <h4>Incident Details:</h4> <div> Incident Number: '+ Incident_Number+'</div> <div> Incident Status: '+ Incident_Status+'</div><div>Incident Type: '+Incident_Type+'</div><div>Company: '+ Company+'</div> <div> Project: '+ Region+'</div> <div>Date: '+ Date+'</div> <div> Description: '+Short_Description+'</div> <p> <div>The Incident is Closed and has no outstanding actions. </div> </p> You can view the incident details <a href="'+ INCIDENT_LINK +'" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a >.</span > </p> <br> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Kind regards,</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Forwood Safety Team</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" ><a href="'+APP_LINK+'" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="6" >Forwood Safety Portal</a ></span > </p> <br> <hr/> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"> <span style="color: black" ><br />Please note that for security reasons <b>you need to be logged into the portal</b> in order to use any direct links presented in this email.<br />After logging into the portal you can click on the link(s) to access the respective page(s).<br /><br />This is an automated message from the Forwood Safety Portal.<br />Please do not reply to this message. </span> </p> </div> </body></html>';
  sendEmail(allUsers, subject, body);
        });
   
   function sendEmail(users, subject, body) {
    
       console.log(users, subject, body);
       const recipents_limit = 50;
           var a = _.uniq(users);
           while(a.length) {
               let recipents = a.splice(0,recipents_limit);
               console.log(recipents.toString());
               tipoHandle.sendEmail(recipents.toString(), subject, body);
           }
   }
  
        } 

    })
} else {
    const count = data_handle.tipo.confirmations.filter(item => !item.Investigation_finalised).length;
                
        tipoHandle.showMessage(`
        ${tipoHandle.getInstantTranslation('TT___THIS_INCIDENT_CANNOT_BE_CLOSED_SINCE_THE')} 
        ${data_handle.tipo.overview_outstanding_actions} 
        ${tipoHandle.getInstantTranslation('TT___OUTSTANDING_ACTIONS_TO_BE_COMPLETED')} 
        `,'');
        };
 return true;
}


 tipoCustomScript.CreateIncident_under_review = function(data_handle) {
tipoHandle.tipoInternalHandleService.tipoDataService.getTipo('CreateIncident', data_handle.tipo.tipo_id, {}, true, undefined, undefined, true, true).subscribe();
if (!data_handle.tipo.confirmations || data_handle.tipo.confirmations.length === 0){
    tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___PLEASE_ADD_ATLEAST_ONE_REVIEWER')  , '');
}else{
    data_handle.tipo.overview_incident_status___token = 'TT___UNDER_REVIEW';

   tipoHandle.updateTipo('CreateIncident', data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
       if (res) {
        setTimeout(() => {
            tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___INVESTIGATION_REPORT_SUBMITTED_FOR_REVIE') + data_handle.tipo.tipo_id , '');
            data_handle.formControl.get('overview_incident_status___token').setValue('TT___UNDER_REVIEW');
            tipoHandle.getTipo('CreateIncident', data_handle.tipo.tipo_id);
        }, 1000);

       }
   }); 

// Code is added to send notification on request review
 const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
   const INCIDENT_LINK = domain +'#/tipo/CreateIncident/'+ data_handle.tipo.tipo_id;
   const APP_LINK = domain +'#/login';
   const Incident_Number = data_handle.tipo.tipo_id;
   const Incident_Status = data_handle.tipo.overview_incident_status;
   const Incident_Type = data_handle.tipo.incident_type_labels.toString();
   const Short_Description = data_handle.tipo.what_briefly_describe_the_incident;
   const Investigation_Completed = data_handle.tipo.investigation_completed_ ? 'Yes' : 'No';
   const Company = data_handle.tipo.client_labels;
   const Region = data_handle.tipo.company_labels;
   const Area = data_handle.tipo.site_labels;
   const dt = data_handle.tipo.when_date_and_time_of_incident;
   const Date = dt ? tipoHandle.getDateUtil(dt).toString() : '';
   let result = (data_handle.tipo.confirmations||[]).map(item => item.addperson_PersonDetails); 
   //const users = result.count > 0 ? result.map(t => t.email) : [];
   
    // let filter = `(site_or_company:${data_handle.tipo.where_incidentlocn.site[0]} AND status:ACTIVE AND (jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin)))`;
      let filter = `(site_or_company:${data_handle.tipo.where_incidentlocn.company[0]} AND status:ACTIVE AND (jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin)))`;
    tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
        console.log(res, '=====');
        let  updatedUsers, allUsers= [];
        let subject,subject_approver;
        const users = res.count > 0 ? res.map(t => t.email) : [];
        if (data_handle.tipo.who_Team.notify_responsible_persons ) {
               updatedUsers = [ data_handle.tipo.who_Team.responsible_manager];
                allUsers = [...users, ...updatedUsers, ...result];
        } else {
                allUsers = [...users, ...result];
        }
        subject = 'An Incident is under review at '+Region+ ' for ' +Short_Description;
                let body = '<html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> </head> <body> <div> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"><h4>Incident Details:</h4> <div> Incident Number: '+ Incident_Number+'</div> <div> Incident Status: '+ Incident_Status+'</div><div>Incident Type: '+Incident_Type+'</div> <div>Company: '+ Company+'</div> <div> Project: '+ Region+'</div> <div>Date: '+ Date+'</div> <div> Description: '+Short_Description+'</div> <p> <div>Review the incident and update if required. </div> </p> You can view the incident details <a href="'+ INCIDENT_LINK +'" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a >.</span > </p> <br> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Kind regards,</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Forwood Safety Team</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" ><a href="'+APP_LINK+'" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="6" >Forwood Safety Portal</a ></span > </p> <br> <hr/> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"> <span style="color: black" ><br />Please note that for security reasons <b>you need to be logged into the portal</b> in order to use any direct links presented in this email.<br />After logging into the portal you can click on the link(s) to access the respective page(s).<br /><br />This is an automated message from the Forwood Safety Portal.<br />Please do not reply to this message. </span> </p> </div> </body></html>';
                sendEmail(allUsers, subject, body);
                //Notification for Approver
                if(result.length > 0) {
                    if(data_handle.tipo.high_potential) {
                        subject_approver = 'A high potential incident is ready for your review and approval';
                    }
                    else {
                        subject_approver = 'An incident is ready for your review and approval';
                    }
                    let body_approver = '<html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> </head> <body> <div> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"><h4>Incident Details:</h4> <div> Incident Number: '+ Incident_Number+'</div> <div> Incident Status: '+ Incident_Status+'</div><div>Incident Type: '+Incident_Type+'</div> <div>Company: '+ Company+'</div> <div> Project: '+ Region+'</div> <div>Date: '+ Date+'</div> <div> Description: '+Short_Description+'</div> <p> <div>You have been requested to review and approve the incident investigation. </div> </p> You can view the incident details <a href="'+ INCIDENT_LINK +'" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a >.</span > </p> <br> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Kind regards,</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Forwood Safety Team</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" ><a href="'+APP_LINK+'" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="6" >Forwood Safety Portal</a ></span > </p> <br> <hr/> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"> <span style="color: black" ><br />Please note that for security reasons <b>you need to be logged into the portal</b> in order to use any direct links presented in this email.<br />After logging into the portal you can click on the link(s) to access the respective page(s).<br /><br />This is an automated message from the Forwood Safety Portal.<br />Please do not reply to this message. </span> </p> </div> </body></html>';
                    sendEmail(result, subject_approver, body_approver);
                }
              
    });
   
   function sendEmail(users, subject, body) {
       console.log(users, subject, body);
       const recipents_limit = 50;
       var a = _.uniq(users);
       while(a.length) {
            let recipents = a.splice(0,recipents_limit);
            console.log(recipents.toString());
            tipoHandle.sendEmail(recipents.toString(), subject, body);
        }
    }
}



return true;
}


 tipoCustomScript.CreateIncident_re_open = function(data_handle) {
data_handle.tipo.overview_incident_status___token = 'TT___UNDER_INVESTIGATION';
tipoHandle.updateTipo('CreateIncident', data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
    if (res) {
        setTimeout(() => {
            tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___INCIDENT_IS_RE_OPENED_AND_SUCCESSFULLY_M') + data_handle.tipo.tipo_id , '');
            data_handle.formControl.get('overview_incident_status___token').setValue('TT___UNDER_INVESTIGATION');
            tipoHandle.getTipo('CreateIncident', data_handle.tipo.tipo_id);
        }, 1000);
    }
});

return true;
}


 tipoCustomScript.CreateIncident_incident_type_OnChange  = function(data_handle) {
if(data_handle.tipo.incident_type && data_handle.tipo.incident_type.length > 0){
    data_handle.tipo.incidenttypefilter = data_handle.tipo.incident_type.join(' OR ');
}
else if (!data_handle.tipo.incident_type || (data_handle.tipo.incident_type && data_handle.tipo.incident_type.length == 0)){
    data_handle.tipo.incidenttypefilter = 'NA';
    data_handle.tipo.incident_type_labels___token.length = 0;
    data_handle.formControl.controls.incident_type_labels___token.reset();
    data_handle.formControl.controls.incidenttypefilter.reset();
    if(data_handle.tipo.incident_categories && data_handle.tipo.incident_categories.length > 0){
        data_handle.tipo.incident_categories.length = 0;
        data_handle.tipo.incident_categories_labels.length = 0;
        data_handle.tipo.incident_categories_labels___token.length = 0;
        data_handle.formControl.controls.incident_categories.reset();
        data_handle.formControl.controls.incident_categories_labels.reset();
        data_handle.formControl.controls.incident_categories_labels___token.reset();
    }
    
}
}

 tipoCustomScript.CreateIncident_incident_categories_AfterLookup = function(data_handle) {
console.log(data_handle);
 var data = {
     "name": "Environment",
     "name___token": "TT___ENVIRONMENT_48",
     "tipo_id": "3060123360"
 }
console.log(data_handle.context.incident_type_labels.length > 0);
if((data_handle.root.incident_type_labels && data_handle.root.incident_type_labels.length > 0) && !(_.includes(_.map(data_handle.tipo_list,'name___token'),'TT___ENVIRONMENT_48')) && !(data_handle.root.incident_type_labels && data_handle.root.incident_type_labels.includes('ESG'))){
    data_handle.tipo_list.push(data);
}
}

 tipoCustomScript.CreateIncident_incident_categories_OnChange  = function(data_handle) {
if(data_handle.tipo.incident_categories && data_handle.tipo.incident_categories.length > 0) {
    data_handle.tipo.incidentcategoryfilter = data_handle.tipo.incident_categories.join(' OR ');
}
}

 tipoCustomScript.CreateIncident_analysis_required_OnChange  = function(data_handle) {
if(data_handle.tipo.analysis_required){
    let cdate = new Date();
    cdate.setDate(cdate.getDate() + 28);
    data_handle.tipo.analysis_due = cdate;
    data_handle.formControl.get('analysis_due').setValue(cdate);
    data_handle.tipo.analysistoggle = true;
}
}

 tipoCustomScript.CreateIncident_what_review_required_OnChange  = function(data_handle) {
if(data_handle.tipo.what_review_required){
    data_handle.tipo.reviewtoggle = true;
}
}

 tipoCustomScript.CreateIncident_where_incidentlocn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.hierarchy_key = new_val.__all__hierarchy__keys && new_val.__all__hierarchy__keys[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.site_level_1 = new_val.site_level_1 && new_val.site_level_1[0];
data_handle.tipo.site_level_1_labels = new_val.site_level_1_labels && new_val.site_level_1_labels[0];
data_handle.tipo.site_level_2 = new_val.site_level_2 && new_val.site_level_2[0];
data_handle.tipo.site_level_2_labels = new_val.site_level_2_labels && new_val.site_level_2_labels[0];
data_handle.tipo.site_level_3 = new_val.site_level_3 && new_val.site_level_3[0];
data_handle.tipo.site_level_3_labels = new_val.site_level_3_labels && new_val.site_level_3_labels[0];
data_handle.tipo.site_level_4 = new_val.site_level_4 && new_val.site_level_4[0];
data_handle.tipo.site_level_4_labels = new_val.site_level_4_labels && new_val.site_level_4_labels[0];
data_handle.tipo.site_level_5 = new_val.site_level_5 && new_val.site_level_5[0];
data_handle.tipo.site_level_5_labels = new_val.site_level_5_labels && new_val.site_level_5_labels[0];
data_handle.tipo.client = new_val.client && new_val.client[0];
data_handle.tipo.client_labels = new_val.client_labels && new_val.client_labels[0];
data_handle.tipo.company = new_val.company && new_val.company[0];
data_handle.tipo.company_labels = new_val.company_labels && new_val.company_labels[0];
data_handle.tipo.forwood_level = new_val.forwood_level && new_val.forwood_level[0];
data_handle.tipo.forwood_level_labels = new_val.forwood_level_labels && new_val.forwood_level_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];
data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
data_handle.tipo.structure_level_1 = new_val.structure_level_1 && new_val.structure_level_1[0];
data_handle.tipo.structure_level_1_labels = new_val.structure_level_1_labels && new_val.structure_level_1_labels[0];
data_handle.tipo.structure_level_2 = new_val.structure_level_2 && new_val.structure_level_2[0];
data_handle.tipo.structure_level_2_labels = new_val.structure_level_2_labels && new_val.structure_level_2_labels[0];
data_handle.tipo.structure_level_3 = new_val.structure_level_3 && new_val.structure_level_3[0];
data_handle.tipo.structure_level_3_labels = new_val.structure_level_3_labels && new_val.structure_level_3_labels[0];
data_handle.tipo.structure_level_4 = new_val.structure_level_4 && new_val.structure_level_4[0];
data_handle.tipo.structure_level_4_labels = new_val.structure_level_4_labels && new_val.structure_level_4_labels[0];
}

 tipoCustomScript.CreateIncident_confirmations_Investigation_finalised_OnChange  = function(data_handle) {
// if(data_handle.context._ARRAY_META) {
// _.forEach(data_handle.tipo.confirmations, function(val, index){
//     if(data_handle.context._ARRAY_META._HASH === val._ARRAY_META._HASH) {
//         val.date_signed_off = tipoHandle.getDateUtil().utc().format();
//     }
// });
// } else {
//     //data_handle.tipo.confirmations[data_handle.tipo.confirmations.length -1].date_signed_off = tipoHandle.getDateUtil().utc().format();
// }
}

 tipoCustomScript.CreateIncident_confirmations_comment_OnChange  = function(data_handle) {
console.log("comment")
}

 tipoCustomScript.CreateIncident_OnList  = function(data_handle) {
console.log(data_handle);
let page = tipoHandle.tipoInternalHandleService.getCurrentState().params && tipoHandle.tipoInternalHandleService.getCurrentState().params.page
let filter_str = tipoHandle.tipoInternalHandleService.getCurrentState().url_filter;
let update_str = filter_str.replace('Reported', 'TT___REPORTED').replace('Εχουν αναφερθεί', 'TT___REPORTED').replace('Under Investigation','TT___UNDER_INVESTIGATION').replace('Υπό διερεύνηση', 'TT___UNDER_INVESTIGATION').replace('Under Review', 'TT___UNDER_REVIEW').replace('Υπό εξέταση', 'TT___UNDER_REVIEW').replace('Final', 'TT___FINAL').replace('Τελικός', 'TT___FINAL').replace('Closed', 'TT___CLOSED').replace('Κλειστό', 'TT___CLOSED').replace('\\\\!true', 'false').replace('Health','TT___HEALTH').replace('Salud', 'TT___HEALTH').replace('Safety','TT___SAFETY').replace('Seguridad','TT___SAFETY').replace('Community','TT___COMMUNITY').replace('Comunidad','TT___COMMUNITY').replace('Reputation','TT___REPUTATION').replace('Reputación','TT___REPUTATION').replace('Environment','TT___ENVIRONMENT_48').replace('Financial', 'TT___FINANCIAL').replace('Financiero','TT___FINANCIAL').replace('Legal', 'TT___LEGAL').replace('Legal','TT___LEGAL').replace('Security','TT___SECURITY').replace('Seguridad','TT___SECURITY').replace('Cyber','TT___CYBER').replace('Cibernético', 'TT___CYBER');
let final_str = update_str.replace('Medio Ambiente','TT___ENVIRONMENT');
tipoHandle.routeTo('/tipo/CreateIncident', {filter: final_str, page: page});
}

 tipoCustomScript.CreateIncident_PostServerSave  = function(data_handle) {
tipoHandle.tipoInternalHandleService.tipoDataService.getTipo('CreateIncident', data_handle.tipo.tipo_id, {}, true, undefined, undefined, true, true).subscribe();
//Below added code is to send Email Notifications to the respective users for create incident
const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
   const INCIDENT_LINK = domain +'#/tipo/CreateIncident/'+ data_handle.tipo.tipo_id;
   const APP_LINK = domain +'#/login';
   const Incident_Number = data_handle.tipo.tipo_id;
   const Incident_Status = data_handle.tipo.overview_incident_status;
   const Incident_Type = data_handle.tipo.incident_type_labels.toString();
   const Short_Description = data_handle.tipo.what_briefly_describe_the_incident;
   const Investigation_Completed = data_handle.tipo.investigation_completed_ ? 'Yes' : 'No';
   const Company = data_handle.tipo.client_labels;
   const Region = data_handle.tipo.company_labels;
   const Area = data_handle.tipo.site_labels;
   const dt = data_handle.tipo.when_date_and_time_of_incident;
   const Date = dt ? tipoHandle.getDateUtil(dt).toString() : '';
   if(data_handle.mode === 'create' ) {
   let filter = `(site_or_company:${data_handle.tipo.where_incidentlocn.company[0]} AND status:ACTIVE AND (jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin)))`;
     //  let filter = `(jobRoleCategory.keyword:(Manager) OR (roles.keyword:SiteAdmin))`;
    tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
  console.log(res, '=====');
  let updatedUsers, allUsers= [];
  const users = res.count > 0 ? res.map(t => t.email) : [];
  if (data_handle.tipo.who_Team.notify_responsible_persons) {
            updatedUsers = data_handle.tipo.who_Team.responsible_manager;
            allUsers = [...users, updatedUsers];
        } else {
            allUsers = [...users];
        }
        const subject = 'New '+Incident_Type+' incident is created at ' + Region + ' for ' + Short_Description + '';
    const body = '<html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> </head> <body> <div> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"> <h4>Incident Details:</h4> <div> Incident Number: ' + Incident_Number + '</div> <div> Incident Status: ' + Incident_Status + '</div><div>Incident Type: '+Incident_Type+'</div> <div>Company: ' + Company + '</div> <div> Project: ' + Region + '</div> <div>Date: ' + Date + '</div> <div> Description: ' + Short_Description + '</div> <p> <div>Review the incident and reflect on the content. </div> <div>If you are part of the investigation, update "Incident Status" and other fields as required.</div> </p> You can view the incident details <a href="' + INCIDENT_LINK + '" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a >.</span > </p> <br> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Kind regards,</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" >Forwood Safety Team</span > </p> <p> <span style="color: black; font-size: 9pt; font-family: Tahoma, sans-serif" ><a href="' + APP_LINK + '" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="6" >Forwood Safety Portal</a ></span > </p> <br> <hr/> <p style="font-size: 11pt; font-family: Calibri, sans-serif; margin: 0"> <span style="color: black" ><br />Please note that for security reasons <b>you need to be logged into the portal</b> in order to use any direct links presented in this email.<br />After logging into the portal you can click on the link(s) to access the respective page(s).<br /><br />This is an automated message from the Forwood Safety Portal.<br />Please do not reply to this message. </span> </p> </div> </body></html>'
    sendEmail(allUsers, subject, body);
});
   }
   
   function sendEmail(users, subject, body) {
       console.log(users, subject, body);
       const recipents_limit = 50;
           var a = _.uniq(users);
           while(a.length) {
               let recipents = a.splice(0,recipents_limit);
               console.log(recipents.toString());
               tipoHandle.sendEmail(recipents.toString(), subject, body);
           }
   }
}

 tipoCustomScript.CreateIncident_OnView  = function(data_handle) {
console.log(tipoHandle.tipoInternalHandleService.getInstantTranslation('TT___PROJECT'), tipoHandle.tipoInternalHandleService.getInstantTranslation('TT___PRINT'))
if(data_handle.tipo.analysis_required){
    data_handle.tipo.overview_analysis_due = data_handle.tipo.analysis_due;
}

return tipoHandle.getTipo('CreateIncident', data_handle.tipo.tipo_id, {}).then((result) => {
        return tipoHandle.getTipos('ActionPlan', {'tipo_filter': 'parent_tipo_id:'+data_handle.tipo.tipo_id}, true).then((res) => {
            data_handle.tipo = {...data_handle.tipo, ...result};
            if(res && res.count > 0) { 
                if(result.incident_action){
                    data_handle.tipo.overview_total_actions = result.incident_action.length;
                    let actionPlans = res.filter(item => result.incident_action.some(itemToBeRemoved => itemToBeRemoved.action_plan === item.tipo_id))
                    console.log(actionPlans)
                    data_handle.tipo.overview_outstanding_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___INCOMPLETE').length;
                    data_handle.tipo.completed_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___COMPLETE').length;
                } else {
                    data_handle.tipo.overview_total_actions = 0;
                    data_handle.tipo.overview_outstanding_actions = 0;
                    data_handle.tipo.completed_actions = 0;
                }
                //data_handle.tipo.overview_outstanding_actions 
        } else {
            data_handle.tipo.overview_total_actions = 0;
            data_handle.tipo.overview_outstanding_actions = 0;
            data_handle.tipo.completed_actions = 0;
        }
        //This piece of code is to check the investigation finalised are disable then make the allInvestigationFinalised toggle are true otherwise false to show the finalise button
        if(data_handle.tipo.confirmations && data_handle.tipo.confirmations.length >0){   
            let check = result.confirmations.some((ele) => ele.Investigation_finalised == "" || ele.Investigation_finalised == false);
            if(check){
                data_handle.tipo.overview_AllInvestigationFinalisedSelected = false;
            } else {
                data_handle.tipo.overview_AllInvestigationFinalisedSelected = true; 
            }
        }
            let add_person = (data_handle.tipo.confirmations||[]).filter(item => item.Investigation_finalised != true);
                data_handle.tipo.approver_lists = _.map(add_person, 'addperson_PersonDetails');
     //return false;
    });
    });
return true;
}

 tipoCustomScript.CreateIncident_OnSave  = function(data_handle) {
if(data_handle.formControl.valid){
const removeNullKeys = data => {
    const isArray = data instanceof Array;
    const deleteKeysFromObj = val => {
        Object.keys(val).forEach(key => {
            if (val[key] === undefined || val[key] === null) {
                delete val[key];
            } else if (typeof val[key] === 'object') {
                if(val[key] instanceof Array && !val[key].length){
                    delete val[key];
                } else {
                     val[key] = removeNullKeys(val[key]);

                }
            }
        });
    };
    if (isArray) {
        data.forEach(item => deleteKeysFromObj(data))
    } else {
        deleteKeysFromObj(data);
    }
    return data;
};
removeNullKeys(data_handle.tipo);
//Do not allow to edit when status is closed
if(data_handle.tipo.overview_incident_status___token === 'TT___CLOSED') {
    setTimeout(() => {
            tipoHandle.showMessage(tipoHandle.getInstantTranslation('TT___THE_INCIDENT_IS_ALREADY_CLOSED_PLEASE_RE'));
            tipoHandle.toTipo('view','CreateIncident',data_handle.tipo.tipo_id);
    }, 10);
    return true;
}

//Change confirmations -> Investigation finalised date
_.forEach(data_handle.tipo.confirmations, function(val, index) {
    if(!val.Investigation_finalised) {
        delete val.date_signed_off;
        delete val.date_signed_off_dtnumber;
    }
});

if (data_handle.tipo.overview_restricted_access_incident___token === 'TT___RESTRICTED_ACCESS') {
        setTimeout(() => {
            tipoHandle.showMessage(tipoHandle.getInstantTranslation('TT___INCIDENT_IS_MARKED_AS_RESTRICTED'));
            tipoHandle.toTipo('list','CreateIncident',undefined);
        }, 10);
}     
}

if(data_handle.tipo.analysis_required){
    data_handle.tipo.overview_analysis_due = data_handle.tipo.analysis_due;
    data_handle.tipo.analysistoggle = false;
}
if(data_handle.tipo.what_review_required){
    data_handle.tipo.reviewtoggle = false;
}
 return tipoHandle.getTipos('ActionPlan', {'tipo_filter': 'parent_tipo_id:'+data_handle.tipo.tipo_id}).then((res) => {
   return tipoHandle.getTipo('CreateIncident', data_handle.tipo.tipo_id, {}).then((result) => {
                if(data_handle.tipo.incident_action){
                    data_handle.tipo.overview_total_actions = data_handle.tipo.incident_action.length;
                    //To remove the null when we initially save the first approver list
                    var filtered = res.filter(function (el) {
                        return el != null;
                    });
                    let actionPlans = filtered.filter(item => data_handle.tipo.incident_action.some(itemToBeRemoved => itemToBeRemoved.action_plan === item.tipo_id))
                    console.log(actionPlans)
                    data_handle.tipo.overview_outstanding_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___INCOMPLETE').length;
                    data_handle.tipo.completed_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___COMPLETE').length;
                } else {
                    data_handle.tipo.overview_total_actions = 0;
                    data_handle.tipo.overview_outstanding_actions = 0;
                    data_handle.tipo.completed_actions = 0;
                }

        if(data_handle.tipo){   
         let add_person = (data_handle.tipo.confirmations||[]).filter(item => item.Investigation_finalised != true);
         data_handle.tipo.approver_lists = _.map(add_person, 'addperson_PersonDetails');
//This piece of code is to check the investigation finalised are disable then make the allInvestigationFinalised toggle are true otherwise false to show the finalise button         
        if(data_handle && data_handle.tipo && data_handle.tipo.confirmations && data_handle.tipo.confirmations.length > 0){
            let check = data_handle.tipo.confirmations.some((ele) => ele.Investigation_finalised == "" || ele.Investigation_finalised == false);
            if(check){
                data_handle.tipo.overview_AllInvestigationFinalisedSelected = false;
            } else{
            data_handle.tipo.overview_AllInvestigationFinalisedSelected = true; 
            }
        } else {
            return false;
        }  
    } 
    else {
        return false;
    }
    })
 })
return true;
}

 tipoCustomScript.CreateIncident_detail_edit = function(data_handle) {
tipoHandle.toTipo('edit',data_handle.tipo_name, data_handle.selected_tipo_id);
return true;
}


 tipoCustomScript.CreateIncident_detail_print = function(data_handle) {
if (window.localStorage.getItem('TipotappIosMobileApp') || window.localStorage.getItem('TipotappAndroidMobileApp')) {
    setTimeout(() => {
        tipoHandle.showMessage(tipoHandle.getInstantTranslation('TT___THIS_FUNCTIONALITY_IS_NOT_ALLOWED_FROM_M'), '', 3000);
    }, 100)
    return true;
}
tipoHandle.getTipo('CreateIncident', data_handle.tipo.tipo_id, {}).then(async (res) => {
    _.merge(data_handle.tipo, res);
    if(data_handle.tipo.overview_incident_status___token == 'TT___REPORTED'){
        if(!data_handle.tipo['physical_loc']){
            Object.assign(data_handle.tipo, {physical_loc: ''});
        }
        var htmlfile = ` 
    <div class="content-header">
        <img  src="https://safetyplus.safetyapps.dev.pluto.forwoodsafety.com/g/tipotapp/safetyplus/public/uploads/assets/images/logo.png?tipo_version_stamp=297fb8f858.1.0.8414723225D"
            alt="logo" />
        <h2  >${tipoHandle.getInstantTranslation('TT___INCIDENT_INVESTIGATION_REPORT_FORM')}</h2>
    </div>
      <table>
        <tr class="header bg-light-blue" class="header">
        <td>
        ${tipoHandle.getInstantTranslation('TT___PROJECT')}
    </td>
      <td>
        ${tipoHandle.getInstantTranslation('TT___LOCATION')}
    </td>

    <td>
        ${tipoHandle.getInstantTranslation('TT___RESPONSIBLE_PERSON')}
    </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___INCIDENT_TYPE')}
    </td>
        </tr>
        <tr>
            <td class="border-style">
                {{site_labels}}
            </td>
            <td class="border-style">
                {{physical_loc}}
            </td>
            <td class="border-style">
                {{who_Team.responsible_manager_labels}}
            </td>
            <td class="border-style">
                {{incident_type}}
            </td>
        </tr>
    </table>
    <br>
    <table>
        <tr class="header bg-light-blue" class="header">
        <td>
        ${tipoHandle.getInstantTranslation('TT___INCIDENT_STATUS')}
      </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___RESTRICTED_ACCESS_INCIDENT')}
    </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___TOTAL_ACTIONS')}
    </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___HIGH_POTENTIAL')}
    </td>
        </tr>
        <tr>
            <td class="border-style">
                {{overview_incident_status}}
            </td>
            <td class="border-style">
                {{overview_restricted_access_incident}}
            </td>
            <td class="border-style">
               ${ data_handle.tipo['incident_action'] ? data_handle.tipo['incident_action'].length:''}
            </td>
            <td class="border-style">
                ${ data_handle.tipo.high_potential === true? tipoHandle.getInstantTranslation('TT___YES') : tipoHandle.getInstantTranslation('TT___NO')}
            </td?
          </tr>
        </table>
        <br>
      <table>
        <tr class="header bg-light-blue" class="header">
        <td>
        ${tipoHandle.getInstantTranslation('TT___DATE_OF_INCIDENT')}
    </td >
    <td>
        ${tipoHandle.getInstantTranslation('TT___DAY_OF_THE_WEEK')}
    </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___TIME_OF_THE_INCIDENT')}
    </td>
    <td>${tipoHandle.getInstantTranslation('TT___DATE_REPORTED')}</td>
    <td>${tipoHandle.getInstantTranslation('TT___TIME_REPORTED')}</td>
        </tr>
        <tr>
            <td class="border-style">
               ${data_handle.tipo.when_date_and_time_of_incident && tipoHandle.getDateUtil(data_handle.tipo.when_date_and_time_of_incident).format('MMM DD,YYYY')}
                
            </td>
            <td class="border-style">
               ${data_handle.tipo.when_date_and_time_of_incident && tipoHandle.getDateUtil(data_handle.tipo.when_date_and_time_of_incident).format('dddd')} 
                
            </td>
            <td class="border-style">
                ${data_handle.tipo.when_date_and_time_of_incident && tipoHandle.getDateUtil(data_handle.tipo.when_date_and_time_of_incident).format('LT')} 
            </td>
            <td class="border-style">
                ${data_handle.tipo.created_date && tipoHandle.getDateUtil(data_handle.tipo.created_date).format('MMM DD,YYYY')}
                
            </td>
            <td class="border-style">
                 ${data_handle.tipo.created_date && tipoHandle.getDateUtil(data_handle.tipo.created_date).format('LT')} 
            </td>
        </tr>
    </table>
           <table>
        <tr>
        <td colspan="3" class="bg-light-blue" style="text-transform: uppercase;">
        <b>${tipoHandle.getInstantTranslation('TT___BRIEF_INCIDENT_DESCRIPTION')}</b>
    </td>
        </tr>
        <tr>
            <td colspan="3" style=" padding-left: 0; padding-right: 0;">
                <div style="min-height: 50px;">
                   {{what_briefly_describe_the_incident}}
                </div>
            </td>
        </tr>
    </table>
    <table>
     <tr>
     <td colspan="3" class="bg-light-blue" style="text-transform: uppercase;">
     <b>${tipoHandle.getInstantTranslation('TT___EVENT_DESCRIPTION')}<b>
 </td>
        </tr>
        <tr>
            <td colspan="3" style=" padding-left: 0; padding-right: 0;">
                <div style="min-height: 100px;">
                   {{what_event_description}}
                </div>
            </td>
        </tr>
        </table>
        <table>
     <tr>
     <td colspan="3" class="bg-light-blue" style="text-transform: uppercase;">
     <b>${tipoHandle.getInstantTranslation('TT___IMMEDIATE_ACTIONS_TAKEN')}<b>
 </td>
        </tr>
        <tr>
            <td colspan="3" style=" padding-left: 0; padding-right: 0;">
                <div style="min-height: 50px;">
                   {{what_immediate_actions_taken}}
                </div>
            </td>
        </tr>
        </table>
        `} else {
            if(!data_handle.tipo['physical_loc']){
            Object.assign(data_handle.tipo, {physical_loc: ''});
        }
        var whysData;
    var htmlfile = ` 
    <div class="content-header">
        <img src="https://safetyplus.safetyapps.dev.pluto.forwoodsafety.com/g/tipotapp/safetyplus/public/uploads/assets/images/logo.png?tipo_version_stamp=297fb8f858.1.0.8414723225D"
            alt="logo" />
            <h2 style="text-transform: uppercase;">${tipoHandle.getInstantTranslation('TT___INCIDENT_INVESTIGATION_REPORT_FORM')}</h2>    </div>
      <table>
        <tr class="header bg-light-blue" class="header">
        <td>
        ${tipoHandle.getInstantTranslation('TT___PROJECT')}
    </td>
      <td>
        ${tipoHandle.getInstantTranslation('TT___LOCATION')}
    </td>

    <td>
        ${tipoHandle.getInstantTranslation('TT___RESPONSIBLE_PERSON')}
    </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___INCIDENT_TYPE')}
    </td>
        </tr>
        <tr>
            <td class="border-style">
                {{site_labels}}
            </td>
            <td class="border-style">
                {{physical_loc}}
            </td>
            <td class="border-style">
                {{who_Team.responsible_manager_labels}}
            </td>
            <td class="border-style">
                {{incident_type}}
            </td>
        </tr>
    </table>
    <br>
    <table>
        <tr class="header bg-light-blue" class="header">
        <td>
        ${tipoHandle.getInstantTranslation('TT___INCIDENT_STATUS')}
      </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___RESTRICTED_ACCESS_INCIDENT')}
    </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___TOTAL_ACTIONS')}
    </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___HIGH_POTENTIAL')}
    </td>
        </tr>
        <tr>
            <td class="border-style">
                {{overview_incident_status}}
            </td>
            <td class="border-style">
                {{overview_restricted_access_incident}}
            </td>
            <td class="border-style">
              ${ data_handle.tipo['incident_action'] ? data_handle.tipo['incident_action'].length:''}
            </td>
            <td class="border-style">
                ${ data_handle.tipo.high_potential === true? tipoHandle.getInstantTranslation('TT___YES') : tipoHandle.getInstantTranslation('TT___NO')}
            </td?
          </tr>
        </table>
        <br>
      <table>
        <tr class="header bg-light-blue" class="header">
        <td>
        ${tipoHandle.getInstantTranslation('TT___DATE_OF_INCIDENT')}
    </td >
    <td>
        ${tipoHandle.getInstantTranslation('TT___DAY_OF_THE_WEEK')}
    </td>
    <td>
        ${tipoHandle.getInstantTranslation('TT___TIME_OF_THE_INCIDENT')}
    </td>
    <td>${tipoHandle.getInstantTranslation('TT___DATE_REPORTED')}</td>
    <td>${tipoHandle.getInstantTranslation('TT___TIME_REPORTED')}</td>
        </tr>
        <tr>
            <td class="border-style">
               ${data_handle.tipo.when_date_and_time_of_incident && tipoHandle.getDateUtil(data_handle.tipo.when_date_and_time_of_incident).format('MMM DD,YYYY')}
                
            </td>
            <td class="border-style">
               ${data_handle.tipo.when_date_and_time_of_incident && tipoHandle.getDateUtil(data_handle.tipo.when_date_and_time_of_incident).format('dddd')} 
                
            </td>
            <td class="border-style">
                ${data_handle.tipo.when_date_and_time_of_incident && tipoHandle.getDateUtil(data_handle.tipo.when_date_and_time_of_incident).format('LT')} 
            </td>
            <td class="border-style">
                ${data_handle.tipo.created_date && tipoHandle.getDateUtil(data_handle.tipo.created_date).format('MMM DD,YYYY')}
                
            </td>
            <td class="border-style">
                 ${data_handle.tipo.created_date && tipoHandle.getDateUtil(data_handle.tipo.created_date).format('LT')} 
            </td>
        </tr>
    </table>
           <table>
        <tr>
            <td colspan="3" class="bg-light-blue" style="text-transform: uppercase;">
            <b>${tipoHandle.getInstantTranslation('TT___BRIEF_INCIDENT_DESCRIPTION')}</b>
            </td>
        </tr>
        <tr>
            <td colspan="3" style=" padding-left: 0; padding-right: 0;">
                <div style="min-height: 50px;">
                   {{what_briefly_describe_the_incident}}
                </div>
            </td>
        </tr>
    </table>
      <!--  <table>
     <tr>
            <td colspan="3" class="bg-light-blue">
            ${tipoHandle.getInstantTranslation('TT___DESCRIBE_THE_AREA_WHERE_INCIDENT_OCCURRE')}
            </td>
        </tr>
        <tr>
            <td colspan="3" style=" padding-left: 0; padding-right: 0;">
                <div style="min-height: 245px;">
                  ${ data_handle.tipo.where_Area || 'N/A'}
                </div>
            </td>
        </tr>
        </table> --!>
    <table>
     <tr>
            <td colspan="3" class="bg-light-blue" style="text-transform: uppercase;">
            <b>${tipoHandle.getInstantTranslation('TT___EVENT_DESCRIPTION')}<b>
            </td>
        </tr>
        <tr>
            <td colspan="3" style=" padding-left: 0; padding-right: 0;">
                <div style="min-height: 100px;">
                   {{what_event_description}}
                </div>
            </td>
        </tr>
        </table>
        <table>
     <tr>
            <td colspan="3" class="bg-light-blue" style="text-transform: uppercase;">
            <b>${tipoHandle.getInstantTranslation('TT___IMMEDIATE_ACTIONS_TAKEN')}<b>
            </td>
        </tr>
        <tr>
            <td colspan="3" style=" padding-left: 0; padding-right: 0;">
                <div style="min-height: 50px;">
                   {{what_immediate_actions_taken}}
                </div>
            </td>
        </tr>
        </table>
        ${await getPersonsData()}
         <table>
        <tr>
            <td class="bg-light-blue border-style text-center">
            <b>${tipoHandle.getInstantTranslation('TT___CONSEQUENCE')}</b>
            </td>
        </tr>
        <tr>
        <td><b>${tipoHandle.getInstantTranslation('TT___HEALTH')}</b> ${tipoHandle.getInstantTranslation('TT___WHERE_THE_IMPACT_IS_ILLNESS_RELATED_FOR_')}
        </td>
       
    </tr>
    <tr>
        <td><b>${tipoHandle.getInstantTranslation('TT___SAFETY')}</b> ${tipoHandle.getInstantTranslation('TT___WHERE_THE_IMPACT_IS_ON_PERSONAL_SAFETY_F')}
        </td>
        
    </tr>
    <tr>
        <td><b>${tipoHandle.getInstantTranslation('TT___ENVIRONMENT')}</b> ${tipoHandle.getInstantTranslation('TT___WHERE_THE_IMPACT_IS_ON_THE_ENVIRONMENT_F')}
        </td>
        
    </tr>
    <tr>
        <td><b>${tipoHandle.getInstantTranslation('TT___COMMUNITY')}</b> ${tipoHandle.getInstantTranslation('TT___WHERE_THE_IMPACT_IS_ON_THE_COMMUNITY_FOR')}
        </td>
        </tr>
        
    </table>
     <br>
    <table>
    <tr>
    <td class="bg-light-blue border-style text-center">
    <b>${tipoHandle.getInstantTranslation('TT___IMPACT_DESCRIPTORS')}</b>
    </td>
    
</tr>
    <tr>
    <td><b>${tipoHandle.getInstantTranslation('TT___1_MINOR')}</b> ${tipoHandle.getInstantTranslation('TT___NO_INJURY_OR_ILLNESS_IMPACT_OF_1_K_LOSS_')} 
   <!--  <td><b>${tipoHandle.getInstantTranslation('TT___MINOR')}</b> ${tipoHandle.getInstantTranslation('TT___NO_INJURY_OR_ILLNESS_IMPACT_OF_1_K_LOSS_')} --!>
   </td>
  
</tr>
<tr>
    <td><b>${tipoHandle.getInstantTranslation('TT___2_MEDIUM')}</b> ${tipoHandle.getInstantTranslation('TT___FIRST_AID_TREATMENT_NO_LAST_TIME_IMPACT_')} 
   <!-- <td><b>${tipoHandle.getInstantTranslation('TT___MEDIUM')}</b> ${tipoHandle.getInstantTranslation('TT___FIRST_AID_TREATMENT_NO_LAST_TIME_IMPACT_')} --!>
   </td>
  
</tr>
<tr>
   <td><b>${tipoHandle.getInstantTranslation('TT___3_SERIOUS')}</b> ${tipoHandle.getInstantTranslation('TT___TEMPORARY_DISABILITY_LOST_TIME_INJURY_OR')} 
 <!--   <td><b>${tipoHandle.getInstantTranslation('TT___SERIOUS')}</b> ${tipoHandle.getInstantTranslation('TT___TEMPORARY_DISABILITY_LOST_TIME_INJURY_OR')} --!>
   </td>
   
</tr>
<tr>
  <td><b>${tipoHandle.getInstantTranslation('TT___4_MAJOR')}</b> ${tipoHandle.getInstantTranslation('TT___SERIOUS_EVENT_CRITICAL_INJURY_OR_CRITICA')} 
<!--   <td><b>${tipoHandle.getInstantTranslation('TT___MAJOR')}</b> ${tipoHandle.getInstantTranslation('TT___SERIOUS_EVENT_CRITICAL_INJURY_OR_CRITICA')} --!>
   </td>
   
</tr>
<tr>
   <td><b>${tipoHandle.getInstantTranslation('TT___5_CATASTROPHIC_34')}</b> ${tipoHandle.getInstantTranslation('TT___FATALITY_OR_PERMANENT_DISABILITY_IMPACT_')} 
 <!--   <td><b>${tipoHandle.getInstantTranslation('TT___CATASTROPHIC')}</b> ${tipoHandle.getInstantTranslation('TT___FATALITY_OR_PERMANENT_DISABILITY_IMPACT_')} --!>
   </td>
   
</tr>
        
    </table>
    <br>
    <br>
        <table>
        <tr>
            <td colspan="2" style="vertical-align: top; width:33%">
            <table  class="text-center">
        <tr class="header bg-light-blue">
            <td colspan="2">${tipoHandle.getInstantTranslation('TT___ACTUAL_SEVERITY')}</td>
        </tr>
          <tr  class="header">
            <td>
            ${tipoHandle.getInstantTranslation('TT___ACTUAL_CONSEQUENCE')}
            </td>
            <td>
            ${tipoHandle.getInstantTranslation('TT___ACTUAL_IMPACT')}
            </td>
                 
          </tr>
         ${await getTableRowdata('actual_severity',['actual_consequence_labels','actual_impact_labels'])} 
        </table>
            </td> 
            <td colspan="2" style="vertical-align:top; width:33%">
              
    <table  class="text-center">
        <tr class="header bg-light-blue">
            <td colspan="2"> ${tipoHandle.getInstantTranslation('TT___POTENTIAL_SEVERITY')} </td>
        </tr>
          <tr  class="header">
            <td>
                ${tipoHandle.getInstantTranslation('TT___MAXIMUM_REASONABLE_OUTCOME')}
            </td>
            <td>
               ${tipoHandle.getInstantTranslation('TT___POTENTIAL_IMPACT')}
            </td>
                 
          </tr>
         ${await getTableRowdata('analysis_potential_severity',['potential_maximum_reasonable_outcome_labels','potential_impact_labels'])} 
        </table>
            
            </td>
        </tr>
    </table>
    <br>
    <table>
    <td colspan="4" style="vertical-align:top; width:66%">
            
    <table  class="text-center">
        <tr class="header bg-light-blue">
            <td colspan="4"> ${tipoHandle.getInstantTranslation('TT___CRITICAL_CONTROLS')} </td>
        </tr>
          <tr  class="header">
            <td>
               ${tipoHandle.getInstantTranslation('TT___CRITICAL_RISKS')}
            </td>
            <td>
               ${tipoHandle.getInstantTranslation('TT___CRITICAL_CONTROLS')}
            </td>
            <td>
               ${tipoHandle.getInstantTranslation('TT___STATUS')}
            </td> 
            
          </tr>
         ${await getTableRowdata('analysis_critical_risk_group',['criticalrisk_labels','criticalcontrol_labels','critical_control_status_labels'])} 
        </table>
            <span colspan="4" style="vertical-align: top;">
                <p style="font-size: 14px;">${tipoHandle.getInstantTranslation('TT___NOTE_DESC')}</p>
            </span>
            <br>
            ${await getFiveWhyTemplate()}
            <br>
            ${await getActionDetail()}
        <br>
     <table  class="text-center">
        <tr class="header bg-light-blue">
            <td colspan="4"> ${tipoHandle.getInstantTranslation('TT___CONFIRMATIONS')} </td>
        </tr>
          <tr  class="header">
            <td>
                ${tipoHandle.getInstantTranslation('TT___ROLE')}
            </td>
            <td>
                ${tipoHandle.getInstantTranslation('TT___RESPONSIBLE_PERSON')}
            </td>
            <td>
                 ${tipoHandle.getInstantTranslation('TT___FINAL')}
            </td> 
            <td>
                ${tipoHandle.getInstantTranslation('TT___DATE_LAST_UPDATED')}
            </td>
          </tr>
         ${await getTableRowdata('confirmations',['addperson_Reported_by_labels','addperson_PersonDetails_labels',{name:'Investigation_finalised',type:'boolean'},{name:'date_signed_off',type:'date'}])} 
        </table>
        <br>
    <br>
  <!--  <p style="page-break-after: always;">&nbsp;</p> --!>
  <!--  <p style="page-break-before: always;">&nbsp;</p> --!>
        <!-- <p style="page-break-after: always;">&nbsp;</p> --!>
        <!-- <p style="page-break-before: always;">&nbsp;</p> --!>
        <table>
            <tr class="bg-light-blue">
                <td style="text-transform: uppercase;">
                    <b> ${tipoHandle.getInstantTranslation('TT___ATTACHMENTS_23')}</b>
                </td>
            </tr> 
            <tr>
                <td>
                    <div class="no-border" style="width: 100%;">
                        ${getEvidence()}
                    </div>
                </td>
            </tr>
        </table>
        <br>
        <div>
          ${tipoHandle.getInstantTranslation('TT___NOTE_TEXT')}
            <ul style="list-style: decimal;">
                <li>   ${tipoHandle.getInstantTranslation('TT___REPORT_ALL')}</li>
                <li>   ${tipoHandle.getInstantTranslation('TT___REPORT_IMMEDIATELY_BY_PHONE_ALL_FATAL_LI')}</li>
                <li>   ${tipoHandle.getInstantTranslation('TT___COMPLETE_AND')}
                </li>
                <li>  ${tipoHandle.getInstantTranslation('TT___COMPLETE_AND_SUBMIT_THE_FINAL_INCIDENT_I')}</li>
            </ul>
        </div>

`}

    async function getPersonsData(){
        if(data_handle.tipo && data_handle.tipo.who_Injured && data_handle.tipo.who_Injured.length > 0 ){
        var html = `<br>
        <div class="main_table">
        <table>
           <tr class="header bg-light-blue">
        <td colspan="5"> ${tipoHandle.getInstantTranslation('TT___INVOLVED_ROLE')}</td>
        </tr>`;
        for(let i=0; i< data_handle.tipo.who_Injured.length; i++){
            const element = data_handle.tipo['who_Injured'][i];
            html+= `
            <table style="border-collapse: collapse;">
            <tr>
            <td style="font-weight: bold;">${tipoHandle.getInstantTranslation('TT___PERSON')} ${i+1}</td>
            </tr>
            </table>
            <div style="padding:5px">
             <table style="border-collapse:collapse;" id="customStyle">
        <tr class="header bg-light-blue">
            <td>  ${tipoHandle.getInstantTranslation('TT___PAYROLL')}</td>
            <td> ${tipoHandle.getInstantTranslation('TT___OFF_SITE_MEDICAL_PROVIDER')}</td>
            <td> ${tipoHandle.getInstantTranslation('TT___OFF_SITE_TAKEN_BY')}</td>
        </tr>
            <tr>
                    <td class="border-style">${element.injured_payroll}</td>
                   <!-- <td class="border-style">${element.injured_was_employee_taken_to_an_offsite_medical_provider_ === true ? 'YES' : 'NO'}  ${element.injured_off_site_medical_provider? '-'+ element.injured_off_site_medical_provider : ''}</td> --!>
                    <td class="border-style">${(element.injured_was_employee_taken_to_an_offsite_medical_provider_ === true || !element.injured_was_employee_taken_to_an_offsite_medical_provider_) ? tipoHandle.getInstantTranslation('TT___YES') : tipoHandle.getInstantTranslation('TT___NO')}  ${element.injured_off_site_medical_provider? '-'+ element.injured_off_site_medical_provider : ''}</td>
                     <td class="border-style">${element.injured_off_site_taken_by || ''} ${element.injured_off_site_when ? '- @'+ tipoHandle.getDateUtil(element.injured_off_site_when).format('MMM DD,YYYY h:mm:ss a') : ''}</td>
                </tr>
        <tr class="header bg-light-blue">
                <td class="border-style">
                     ${tipoHandle.getInstantTranslation('TT___IS_FOLLOW_UP_MEDICAL_CARE_REQUIRED')}
                </td>
                <td class="border-style">
                    ${tipoHandle.getInstantTranslation('TT___WAS_WORKER_PROVIDED_WITH_A_FUNCTIONAL_AB')}
                </td>
                <td class="border-style">
                    ${tipoHandle.getInstantTranslation('TT___WAS_MODIFIED_WORK_OFFERED_TO_EMPLOYEE')}
                </td>
            </tr>
                <tr>
              <!--   <td class="border-style">${element.injured_is_follow_up_medical_care_required_ === 'Yes' ? 'YES' : (element.injured_is_follow_up_medical_care_required_ === 'No'? 'NO': (element.injured_is_follow_up_medical_care_required_ === 'Not Applicable'? 'NOT APPLICABLE': ''))}</td> 
                    <td class="border-style">${element.injured_was_worker_provided_with_a_functional_abilities_form_work_release_ === 'Yes' ? 'YES' : (element.injured_was_worker_provided_with_a_functional_abilities_form_work_release_ === 'No'? 'NO': (element.injured_was_worker_provided_with_a_functional_abilities_form_work_release_ === 'Not Applicable'? 'NOT APPLICABLE': ''))}</td>
                    <td class="border-style">${element.injured_was_modified_work_offered_to_employee_ === 'Yes' ? 'YES' : (element.injured_was_modified_work_offered_to_employee_ === 'No'? 'NO': (element.injured_was_modified_work_offered_to_employee_ === 'Not Applicable'? 'NOT APPLICABLE': ''))}</td> --!>
                    <td class="border-style">${(element.injured_is_follow_up_medical_care_required_ === 'Yes' || element.injured_is_follow_up_medical_care_required_ === 'Ναί')?tipoHandle.getInstantTranslation('TT___YES') : ((element.injured_is_follow_up_medical_care_required_ === 'No' || element.injured_is_follow_up_medical_care_required_ === 'Οχι')? tipoHandle.getInstantTranslation('TT___NO'): ((element.injured_is_follow_up_medical_care_required_ === 'Not Applicable' || element.injured_is_follow_up_medical_care_required_ === 'Δεν εφαρμόζεται N/A')? tipoHandle.getInstantTranslation('TT___NOT_APPLICABLE'): ''))}</td> 
                    <td class="border-style">${(element.injured_was_worker_provided_with_a_functional_abilities_form_work_release_ === 'Yes' || element.injured_was_worker_provided_with_a_functional_abilities_form_work_release_ === 'Ναί')?tipoHandle.getInstantTranslation('TT___YES') : ((element.injured_was_worker_provided_with_a_functional_abilities_form_work_release_ === 'No' || element.injured_was_worker_provided_with_a_functional_abilities_form_work_release_ === 'Οχι')? tipoHandle.getInstantTranslation('TT___NO'): ((element.injured_was_worker_provided_with_a_functional_abilities_form_work_release_ === 'Not Applicable' || element.injured_was_worker_provided_with_a_functional_abilities_form_work_release_ === 'Δεν εφαρμόζεται N/A')? tipoHandle.getInstantTranslation('TT___NOT_APPLICABLE'): ''))}</td>
                    <td class="border-style">${(element.injured_was_modified_work_offered_to_employee_ === 'Yes' || element.injured_was_modified_work_offered_to_employee_ === 'Ναί')?tipoHandle.getInstantTranslation('TT___YES') : ((element.injured_was_modified_work_offered_to_employee_ === 'No' || element.injured_was_modified_work_offered_to_employee_ === 'Οχι')? tipoHandle.getInstantTranslation('TT___NO'): ((element.injured_was_modified_work_offered_to_employee_ === 'Not Applicable' || element.injured_was_modified_work_offered_to_employee_ === 'Δεν εφαρμόζεται N/A')? tipoHandle.getInstantTranslation('TT___NOT_APPLICABLE'): ''))}</td>
                </tr>
        <tr class="header bg-light-blue">
                <td class="border-style">
                     ${tipoHandle.getInstantTranslation('TT___BODY_PART')}
                </td>
                <td class="border-style">
                     ${tipoHandle.getInstantTranslation('TT___MECHANISM_OF_INJURY')}
                </td>
                <td class="border-style">
                    ${tipoHandle.getInstantTranslation('TT___NATURE_OF_INJURY')}
                </td>
            </tr>
                <tr>
                 <td class="border-style">${element.injured_body_part_labels || ''}</td>
                    <td class="border-style">${element.injured_mechanism_of_injury_labels || ''}</td>
                    <td class="border-style">${element.injured_nature_of_injury_labels || ''}</td>
                </tr>
                </table>
                </div>
                <!-- <br> --!>
                `;
        }
        html += '</table> </div><br>'
        return html;
        } else {
            return '<div></div><br>';
        }
    }



    async function getTableRowdata(key,td){
        let html = "";
        if(!data_handle.tipo[key]) return html;
        for (let i = 0; i < data_handle.tipo[key].length; i++) {
            html += '<tr>';
            for(let j=0; j < td.length; j++){
                html += '<td class="border-style">';
                if(typeof(td[j])=='string'){
                    html += data_handle.tipo[key][i][td[j]] || ''
                }else{
                    let obj = td[j];
                    if(obj.type =="date"){
                    html += ` <div class="no-border">${data_handle.tipo[key][i][obj.name] ? tipoHandle.getDateUtil(data_handle.tipo[key][i][obj.name]).format(obj.format || 'MMM DD,YYYY'): ''}</div>`  
                    }else if(obj.type == "boolean"){
                    html += ` <div class="no-border">${data_handle.tipo[key][i][obj.name] ? 'YES' : 'NO'}</div>`  
                    }else{
                        html += ` <div class="no-border">${data_handle.tipo[key][i][obj.name] ? data_handle.tipo[key][i][obj.name]: ''}</div>`  
                    }
                }
                html += '</td>';
            } 
            html += '</tr>'; 
        }
        return html;
    }
    function getLoopdata(key1, key2, datatype = 'string', format = null) {
        let html = '';
        if(data_handle.tipo[key1]) {
        for (let i = 0; i < data_handle.tipo[key1].length; i++) {
            if (data_handle.tipo[key1] && data_handle.tipo[key1][i] && data_handle.tipo[key1][i][key2]) {
                if (datatype == 'date') {
                    html += ` <div>${tipoHandle.getDateUtil(data_handle.tipo[key1][i][key2]).format(format || 'MMM DD,YYYY')}</div>`
                } else {
                    html += ` <div style="height: 20px; font-size:15px">${data_handle.tipo[key1][i][key2]}</div>`
                }
            } else {
                html += ` <div style="height: 20px"> </div>`
            }
        }
        }
        return html;
    }
    function getLoopdataFromArray(key1, datatype = 'string', format = null) {
        let html = '';
        if(data_handle.tipo[key1]) {
        for (let i = 0; i < data_handle.tipo[key1].length; i++) {
            if (data_handle.tipo[key1] && data_handle.tipo[key1][i]) {
                if (datatype == 'date') {
                    html += ` <div>${tipoHandle.getDateUtil(data_handle.tipo[key1][i]).format(format || 'MMM DD,YYYY')}</div>`
                } else {
                    html += ` <div>${data_handle.tipo[key1][i]}</div>`
                }
            } else {
                html += ` <div>N/A</div>`
            }
        }
        }
        return html;
    }
    function getBooleanValue(key) {
        return data_handle.tipo[key] == true ? 'Yes' : 'No'
    }
    function getLoopdataWithoutBorder(key1, key2, datatype = 'string', format = null) {
        let html = '';
        if(data_handle.tipo[key1]) {
        for (let i = 0; i < data_handle.tipo[key1].length; i++) {
            if (data_handle.tipo[key1] && data_handle.tipo[key1][i] && data_handle.tipo[key1][i][key2]) {
                if (datatype == 'date') {
                    html += ` <div class="no-border">${tipoHandle.getDateUtil(data_handle.tipo[key1][i][key2]).format(format || 'MMM DD,YYYY')}</div>`
                } else {
                    html += ` <div class="no-border">${data_handle.tipo[key1][i][key2]}</div>`
                }
            } else {
                html += ` <div class="no-border">N/A</div>`
            }
        }
        }
        return html;
    }
    function employeePayrol() {
        let html = '';
        if (!data_handle.tipo.who_Team || !data_handle.tipo.who_Team.others_involved) return html;
        for (let i = 0; i < data_handle.tipo.who_Team.others_involved.length; i++) {
            html += ` <div>
                    <span>${i + 1}.</span>
                    <span>${data_handle.tipo.who_Team.others_involved[i].involved_other_person_team || ''}</span>
                </div>`;
        }
        return html;
    }
    function getEvidence() {
        let html = "";
        console.log("loop fuction call");
        if (!data_handle.tipo.what_evidence_attach_ || data_handle.tipo.what_evidence_attach_.length < 1 ) return html;
        for (let i = 0; i < data_handle.tipo.what_evidence_attach_.length; i++) {
            let file = data_handle.tipo.what_evidence_attach_[i];
            try {
                html += `
            <div class="image-container border-style">
            <img src="${getEvidenceAttachPath(file.key)}" />
        </div>
            `

            }
            catch (err) {
                console.log(err);
            }
        }
        return html;
    }
    function getEvidenceAttachPath(key) {
        return tipoHandle.application_meta.TipoConfiguration.aws_settings.s3_url + '/' + tipoHandle.application_meta.TipoConfiguration.aws_settings.upload_bucket + '/g/tipotapp/hednoiss/' + key;
    }
    function getDateString(date,format=null){
        if(!date) return '';     
        return tipoHandle.getDateUtil(date).format(format || 'MMM DD,YYYY')
    }
    async function getActionDetail(){
        let html='';
        if(!data_handle.tipo['incident_action'] || data_handle.tipo['incident_action'].length==0) return html;
        html = `<table class="text-center">
        <tr class="header bg-light-blue">
        <td colspan="6"> ${tipoHandle.getInstantTranslation('TT___ACTION_PLANS')} </td>
        </tr>
        <tr  class="header">
            <td class="border-style">
                ${tipoHandle.getInstantTranslation('TT___RECOMMENDATION_68')}
            </td>
            <td class="border-style">
                ${tipoHandle.getInstantTranslation('TT___ACTION_PLAN_TYPE')}
            </td>
            <td class="border-style">
                ${tipoHandle.getInstantTranslation('TT___ACTION_BY_CLASS')}
            </td>
            <td class="border-style">
               ${tipoHandle.getInstantTranslation('TT___RESPONSIBLE_PERSON')} 
            </td>
            <td class="border-style">
                ${tipoHandle.getInstantTranslation('TT___DATE_AND_TIME_INCIDENT')}
            </td>
            <td class="border-style">
                ${tipoHandle.getInstantTranslation('TT___DATE_LAST_UPDATED')}
            </td>
        </tr>`;

        for (let i = 0; i < data_handle.tipo['incident_action'].length; i++) {
            const element = data_handle.tipo['incident_action'][i];
            try{
                let data = await tipoHandle.getTipo('ActionPlan',element.action_plan,{})
                console.log(data);
                html += `<tr>
                    <td class="border-style">${data.action || ''}</td> 
                    <td class="border-style">${data.action_plan_type || ''}</td>
                    <td class="border-style">${data.action_class || ''}</td>
                    <td class="border-style">${data.responsible_person__labels || ''}</td>
                    <td class="border-style">${getDateString(data.end_date)}</td>
                    <td class="border-style">${getDateString(data.complete_date || '')}</td>
                </tr>`;
            }finally{
                    
            }            
        }
        html += '</table>'
        return html;
    }

     async function getFiveWhyTemplate(){
        let html='';
        if(!data_handle.tipo['analysis_root_cause_analysis_smy'] || data_handle.tipo['analysis_root_cause_analysis_smy'].length==0) return html;
        html = `<table class="text-center">
        <tr class="header bg-light-blue">
        <td colspan="5"> ${tipoHandle.getInstantTranslation('TT___ROOT_CAUSE_ANALYSIS')} </td>
        </tr>
        </table>`;

        for (let i = 0; i < data_handle.tipo['analysis_root_cause_analysis_smy'].length; i++) {
            const element = data_handle.tipo['analysis_root_cause_analysis_smy'][i];
            try{
                whysData = await tipoHandle.getTipo('RootCauseAnalysis',element.root_cause_plugin,{})
                html += `<div style="border-bottom: 1px solid">
                <span style="display: flex;">
                                <label class="problemStatementLabel">
                                ${tipoHandle.getInstantTranslation('TT___PROBLEM_STATEMENT')}</label>
                                <div class="text-area">
                                    <span>
                                        ${whysData.problem_statemnet}
                                    </span>

                                </div>
                        </span>
                        <br>
                        ${await getWhysTemplate()}
                        <br>
                         <span style="display: flex;">
                                <label class="problemStatementLabel">
                                    ${tipoHandle.getInstantTranslation('TT___ROOT_CAUSE')}</label>
                                <div class="text-area">
                                    <span>
                                        ${whysData.root_cause}
                                    </span>
                                </div>
                            </span>
                            <br>
                            <span style="display: flex;">
                                <label class="problemStatementLabel">
                                    ${tipoHandle.getInstantTranslation('TT___RECURRENCE_PREVENTION')}</label>
                                <div class="text-area">
                                    <span>
                                        ${whysData.recurrence_prevention}
                                    </span>

                                </div>
                            </span>
                            </div>`;
            }finally{
                    
            }            
        }
        return html;
    }

    async function getWhysTemplate(){
        let html='';
        for(let j=0; j<whysData.whys.length; j++){
            html += `<span style="display: flex;">
            <label class="whyslabel">
            ${tipoHandle.getInstantTranslation('TT___WHY')}</label>
                <div style="display:flex;flex:1;position:relative" class=${j === whysData.whys.length-1 ? '' : 'why-textarea-arrow'}>
                  <span class="whyTextarea">
                        ${whysData.whys[j]}
                    </span>
                </div>
                </span>`;
        }
        return html;
    }


    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    var compiled = _.template(htmlfile);
    compiled = compiled(data_handle.tipo);
    let printWindow = window.open('', '', 'height=1000,width=1000');

    printWindow.document.write(`<html><head><title>${tipoHandle.getInstantTranslation('TT___INCIDENT_INVESTIGATION_REPORT_FORM')} - ${data_handle.tipo.tipo_id}</title>
 <style>
        body{
            font-size: 14px;
            margin: 0px;
        }
        @media print {
            body {-webkit-print-color-adjust: exact;}
            tr    { page-break-inside:avoid; page-break-after:auto; }
            table {page-break-inside:avoid; page-break-after:auto; }
        }

        .content-header {
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: #01619E;
            color: #fff;
        }
        .content-header img{
            background-color: #01619E;
            padding: 5px;
            width:20%;
        }
        .content-header h2{
            background-color: #01619E;
            text-align: center;
            font-size: 18px;
            text-transform: uppercase;
            width:93%;
        }

        .content-header button {
            height: 50px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        table tr.header {
            font-size: 14px;
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            padding: 10px 0;
        }

        .bg-light-blue {
            background-color: #cee3f0;
        }

        table tr.header td {
            border: 1px solid black;
        }

        table tr td {
            padding: 5px;
        }

        .no-padding {
            padding: 0px !important;
        }

        table tr td.nested {
            vertical-align: top;
            padding: 0 !important;
        }

        table tr td.nested div span:first-child {
            border-right: 1px solid black;
            padding: 6px 7px;
        }

        table tr td div {
            padding: 5px;
            border: 1px solid black;
            border-bottom: none;
        }

        table tr td div:last-child {
            border-bottom: 1px solid black;
        }

        table tr td.nested div {
        }

        .border-style {
            border: 1px solid black;
        }

        .border-bottom {
            border-bottom: 1px solid black;
        }

        .seprator {
            height: 0;
            padding: 0;
            margin: 10px -10px;
        }

        .no-padding-vertical {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }

        .no-border {
            border: none !important;
        }

        .text-center {
            text-align: center;
        }

        .bg-green {
            background-color: #69aa42;
        }

        .bg-yellow {
            background-color: #dad23b;
        }

        .bg-skin {
            background-color: #e5c16b;
        }

        .bg-orange {
            background-color: #e58b59;
        }

        .bg-red {
            background-color: #d54a52;
        }

        .action {
            color: blue;
            text-decoration: underline;
        }
        .image-container{
            width: 48%;
            padding: 5px;
            float: left;
            text-align: center;
        }
        .image-container img{
            width: 100%;
        }
        .text-area{
            flex: 20%;
        }
        .problemStatementLabel{
            font-size: 16px;
            padding-left: 15px;
            display: flex;
            align-items: center;
            flex: 0.16;
        }
        .whyslabel{
            font-size: 16px;
            padding-left: 15px;
            display: flex;
            align-items: center;
            flex: 0.12;
        }
        .whys-text-area{
           padding: 10px 3px;
            flex: 20%; 
        }
        .why-textarea-arrow {
            position: relative;
            display: flex;
            flex: 1;
            margin-bottom: 25px;
        }

        .why-textarea-arrow:before {
            content: '';
            position: absolute;
            border-top: 8px solid #686868;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            bottom: -25px;
            left: calc(50% - 7px);
        }

        .why-textarea-arrow:after {
            content: '';
            position: absolute;
            bottom: -25px;
            width: 2px;
            height: 25px;
            left: calc(50% - 1px);
            background: #686868;
            border-radius: 5px;
        }
        div.main_table {border: 1px solid black;}
        #customStyle{
            border-spacing: 20px 20px 20px 20px;
        }
    </style>
         
    `);
    printWindow.document.write('</head><body>');
    printWindow.document.write(compiled);
    printWindow.document.write('</body></html>');
    // exhartsImg(printWindow.document);
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
    }, 500);
});
return true;
}


//___CreateIncident___
//___WPIChecklist___

 tipoCustomScript.WPIChecklist_contractor_company_labels_AfterLookup = function(data_handle) {
console.log("afterlookup",data_handle)
}

 tipoCustomScript.WPIChecklist_contractor_company_labels_OnChange  = function(data_handle) {
// tipoHandle.getTipos('TipoSSTeams',{}).then((res)=>{
// console.log("test",res)
//   var owner_details = _.find(res,['tipo_id',data_handle.tipo.contractor_company]);
//   data_handle.formControl.get('crew_manager').setValue(owner_details.owner.full_name)
  //_.map(owner_details.members,(result)=>{
 //     data_handle.tipo.crew_members.push(result.full_name)
 // });
 // return;
//})
}

 tipoCustomScript.WPIChecklist_contractor_company_labels_BeforeLookup = function(data_handle) {
console.log("beforelookup",data_handle)
}

 tipoCustomScript.WPIChecklist_machine_number_OnChange  = function(data_handle) {
tipoHandle.getTipos('VehicleRegistry',{}).then((res)=>{
   var machine_number_filter = _.find(res,['machine_number',data_handle.tipo.machine_number_labels]);
   data_handle.formControl.get('vehicle_machine_number').setValue(machine_number_filter.vehicle_type_labels)
})
}

 tipoCustomScript.WPIChecklist_crew_members_BeforeLookup = function(data_handle) {
console.log("data",data_handle)
}

 tipoCustomScript.WPIChecklist_crew_members_AfterLookup = function(data_handle) {
//console.log("data",data_handle)
//tipoHandle.getTipos('TipoSSTeams',{}).then((res)=>{
//console.log("test",res)
//var member_details = _.find(res,['tipo_id',data_handle.root.contractor_company]);
//_.map(member_details.members,(result)=>{
//     data_handle.tipo_list.push(result.full_name)
// });
// return;
//})
}

 tipoCustomScript.WPIChecklist_OnView  = function(data_handle) {
if(tipoHandle.isOnline && data_handle.tipo.savedOffline) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': data_handle.tipo.geo_locn
    },(res,status)=>{
        const myLatLng = {
            'lat' : res ? res[0].geometry.location.lat() : 0,
            'lng' : res ? res[0].geometry.location.lng() : 0
        }
        console.log("data",data_handle);
        const maploc = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 17,
            center: myLatLng,
            gestureHandling: "none",
            zoomControl: false
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            maploc,
            title: data_handle.tipo.geo_locn,
        });

        marker.setMap(maploc);
        data_handle.tipo.savedOffline = false;
        tipoHandle.updateTipo('WPIChecklist',data_handle.tipo.tipo_id,data_handle.tipo)
       
        
    })  
}
}

 tipoCustomScript.WPIChecklist_OnList  = function(data_handle) {
let page = tipoHandle.tipoInternalHandleService.getCurrentState().params && tipoHandle.tipoInternalHandleService.getCurrentState().params.page;
let filter_str = tipoHandle.tipoInternalHandleService.getCurrentState().url_filter;
let update_str = filter_str.replace("A' Level", 'TT___A_LEVEL_44').replace("Επίπεδο Α'", 'TT___A_LEVEL_44').replace('SIF \\\\- Energy Isolation', 'TT___SIF_ENERGY_ISOLATION').replace('SIF \\\\- Ενεργειακή Απομόνωση', 'TT___SIF_ENERGY_ISOLATION').replace('SIF \\\\- Mobile Equipment','TT___SIF_MOBILE_EQUIPMENT_28').replace('SIF \\\\- Κινητός Εξοπλισμός','TT___SIF_MOBILE_EQUIPMENT_28').replace('SIF \\\\- Work at Height', 'TT___SIF_WORK_AT_HEIGHT_26').replace('SIF \\\\- Εργασία σε ύψος', 'TT___SIF_WORK_AT_HEIGHT_26').replace('INDUSTRY SPECIFIC - Pre-Mobilisation of Mobile Equipment', 'TT___INDUSTRY_SPECIFIC_PRE_MOBILISATION_OF_MO').replace('ΕΙΔΙΚΗ ΒΙΟΜΗΧΑΝΙΑ - Προ-κινητοποίηση κινητού εξοπλισμού', 'TT___INDUSTRY_SPECIFIC_PRE_MOBILISATION_OF_MO').replace("A' Level Contractor", 'TT___A_LEVEL_CONTRACTOR').replace("Ανάδοχος Α' Επιπέδου", 'TT___A_LEVEL_CONTRACTOR').replace("B' Level", 'TT___B_LEVEL_40').replace("Επίπεδο Β'",'TT___B_LEVEL_40').replace("C' Level", 'TT___C_LEVEL').replace("Επίπεδο C'",'TT___C_LEVEL').replace("Έλεγχοι SIF \\\\- Εργασία σε ύψος", 'TT___SIF_WORK_AT_HEIGHT_26').replace("Έλεγχοι SIF \\\\- Απομόνωση της ενέργειας", 'TT___SIF_ENERGY_ISOLATION').replace("Έλεγχοι SIF \\\\- Κινητός Εξοπλισμός",'TT___SIF_MOBILE_EQUIPMENT_28');
console.log(filter_str, update_str);
tipoHandle.routeTo('/tipo/WPIChecklist', {filter: update_str, menu_filter:tipoHandle.tipoInternalHandleService.getCurrentState().url_menu_filter,page: page},false, true);
}

 tipoCustomScript.WPIChecklist_PostServerSave  = function(data_handle) {
tipoHandle.tipoInternalHandleService.tipoDataService.getTipo('WPIChecklist', data_handle.tipo.tipo_id, {}, true, undefined, undefined, true, true).subscribe();

if(tipoHandle.isOnline && !data_handle.tipo.geo_locn_location) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': data_handle.tipo.geo_locn
    },(res,status)=>{
        data_handle.tipo.geo_locn_location = {
            'lat' : res ? res[0].geometry.location.lat() : 0,
            'lon' : res ? res[0].geometry.location.lng() : 0
        }
        data_handle.tipo.savedOffline = true;
        tipoHandle.updateTipo('WPIChecklist',data_handle.tipo.tipo_id,data_handle.tipo).then((result)=> {
            console.log("data_handle",data_handle.tipo)
        })
    })   
}
}

 tipoCustomScript.WPIChecklist_OnCreate  = function(data_handle) {
tipoHandle.toTipo('create','CreateWPIVerification');
return true;
}

 tipoCustomScript.WPIChecklist_OnSave  = function(data_handle) {
var list_data = _.map(data_handle.tipo.___checklist_data___,"data");
console.log("list_data",list_data)
//Action Plan Mandatory for Violation
var user_entry_no = list_data.map((x)=>_.filter(x,['answer','No']));
var refine_list = user_entry_no.filter(value => JSON.stringify(value) !== '[]');
var user_entry_ap = _.map(refine_list,(x) => _.map(x,'action_plan_id'));
console.log("user_entry_ap",user_entry_ap)
var combined_entry = user_entry_ap.flat()
console.log("combined_entry",combined_entry)
console.log(combined_entry.includes(''))

//Answer all questions
var user_entry_empty = list_data.map((x)=>_.filter(x,['answer','']));
var refine_list_empty = user_entry_empty.filter(value => JSON.stringify(value) !== '[]');
console.log("user_entry_empty",refine_list_empty)
console.log("empty length",refine_list_empty.length)

if(refine_list_empty.length > 0) {
    if(combined_entry.includes('')) {
        tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___ACTION_PLAN_IS_MANDATORY_FOR_VIOLATIONS_')  , '');
        return true;
    }
    else {
    tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___FILL_ALL_THE_ANSWERS')  , '');
    return true;
    }
}
else {
  if(combined_entry.includes('')) {
        tipoHandle.showMessage('' + tipoHandle.getInstantTranslation('TT___ACTION_PLAN_IS_MANDATORY_FOR_VIOLATIONS')  , '');
        return true;
    }
  //rest
   console.log(data_handle, ": WPI Checklist")    
    let na_count=[];
    let no_count =[];
    let yes_count=[];
    for (i=0;i<data_handle.tipo.___checklist_data___.length;i++) {
        yes_count.push(data_handle.tipo.___checklist_data___[i].data.filter(e=>e.answer=='Yes').length);
        no_count.push(data_handle.tipo.___checklist_data___[i].data.filter(e=>e.answer=='No').length);
        na_count.push(data_handle.tipo.___checklist_data___[i].data.filter(e=>e.answer=='NA').length);
    }
    data_handle.tipo.___checklist_counts___.total_na = _.sum(na_count);
    data_handle.tipo.___checklist_counts___.total_no = _.sum(no_count);
    data_handle.tipo.___checklist_counts___.total_yes = _.sum(yes_count);

    if(data_handle.mode == 'create') {
        if(data_handle.tipo.checklist_definition_name == "A' Level" || data_handle.tipo.checklist_definition_name == "Επίπεδο Α'") {
            data_handle.tipo.checklist_definition_name___token = 'TT___A_LEVEL_44'
        }
        if(data_handle.tipo.checklist_definition_name == 'SIF - Energy Isolation' || data_handle.tipo.checklist_definition_name == 'SIF - Ενεργειακή Απομόνωση' || data_handle.tipo.checklist_definition_name === 'Έλεγχοι SIF - Απομόνωση της ενέργειας') {
            data_handle.tipo.checklist_definition_name___token = 'TT___SIF_ENERGY_ISOLATION'
        }
        if(data_handle.tipo.checklist_definition_name == 'SIF - Mobile Equipment' || data_handle.tipo.checklist_definition_name == 'SIF - Κινητός Εξοπλισμός' || data_handle.tipo.checklist_definition_name === 'Έλεγχοι SIF - Κινητός Εξοπλισμός') {
            data_handle.tipo.checklist_definition_name___token = 'TT___SIF_MOBILE_EQUIPMENT_28'
        }
        if(data_handle.tipo.checklist_definition_name == 'SIF - Work at Height' || data_handle.tipo.checklist_definition_name == 'SIF - Εργασία σε ύψος' || data_handle.tipo.checklist_definition_name === 'Έλεγχοι SIF - Εργασία σε ύψος') {
            data_handle.tipo.checklist_definition_name___token = 'TT___SIF_WORK_AT_HEIGHT_26'
        }
        if(data_handle.tipo.checklist_definition_name == 'TASK BASED - Pre-Mobilisation of Mobile Equipment' || data_handle.tipo.checklist_definition_name == 'ΒΑΣΕΙ ΕΡΓΑΣΙΩΝ - Προ-κινητοποίηση κινητού εξοπλισμού') {
            data_handle.tipo.checklist_definition_name___token = 'TT___INDUSTRY_SPECIFIC_PRE_MOBILISATION_OF_MO'
        }
        if(data_handle.tipo.checklist_definition_name == "A' Level Contractor" || data_handle.tipo.checklist_definition_name == "Ανάδοχος Α' Επιπέδου") {
            data_handle.tipo.checklist_definition_name___token = 'TT___A_LEVEL_CONTRACTOR'
        }
        if(data_handle.tipo.checklist_definition_name == "B' Level" || data_handle.tipo.checklist_definition_name == "Επίπεδο Β'") {
            data_handle.tipo.checklist_definition_name___token = 'TT___B_LEVEL_40'
        }
        if(data_handle.tipo.checklist_definition_name == "C' Level" || data_handle.tipo.checklist_definition_name == "Επίπεδο C'") {
            data_handle.tipo.checklist_definition_name___token = 'TT___C_LEVEL'
        }
    }
}
}

//___WPIChecklist___
//___CreateWPIVerification___

 tipoCustomScript.CreateWPIVerification_tipo_id_OnChange  = function(data_handle) {
console.log(data_handle);
tipo_filter = '(site:'+ data_handle.tipo.site + '|| structure:'+ data_handle.tipo.structure +')';
}

 tipoCustomScript.CreateWPIVerification_choose_locn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.tipo_filter = new_val.__all__keys;
data_handle.tipo.hierarchy_key = new_val.__all__hierarchy__keys && new_val.__all__hierarchy__keys[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.site_level_1 = new_val.site_level_1 && new_val.site_level_1[0];
data_handle.tipo.site_level_1_labels = new_val.site_level_1_labels && new_val.site_level_1_labels[0];
data_handle.tipo.site_level_2 = new_val.site_level_2 && new_val.site_level_2[0];
data_handle.tipo.site_level_2_labels = new_val.site_level_2_labels && new_val.site_level_2_labels[0];
data_handle.tipo.site_level_3 = new_val.site_level_3 && new_val.site_level_3[0];
data_handle.tipo.site_level_3_labels = new_val.site_level_3_labels && new_val.site_level_3_labels[0];
data_handle.tipo.site_level_4 = new_val.site_level_4 && new_val.site_level_4[0];
data_handle.tipo.site_level_4_labels = new_val.site_level_4_labels && new_val.site_level_4_labels[0];
data_handle.tipo.site_level_5 = new_val.site_level_5 && new_val.site_level_5[0];
data_handle.tipo.site_level_5_labels = new_val.site_level_5_labels && new_val.site_level_5_labels[0];
data_handle.tipo.client = new_val.client && new_val.client[0];
data_handle.tipo.client_labels = new_val.client_labels && new_val.client_labels[0];
data_handle.tipo.company = new_val.company && new_val.company[0];
data_handle.tipo.company_labels = new_val.company_labels && new_val.company_labels[0];
data_handle.tipo.forwood_level = new_val.forwood_level && new_val.forwood_level[0];
data_handle.tipo.forwood_level_labels = new_val.forwood_level_labels && new_val.forwood_level_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];
data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
data_handle.tipo.structure_level_1 = new_val.structure_level_1 && new_val.structure_level_1[0];
data_handle.tipo.structure_level_1_labels = new_val.structure_level_1_labels && new_val.structure_level_1_labels[0];
data_handle.tipo.structure_level_2 = new_val.structure_level_2 && new_val.structure_level_2[0];
data_handle.tipo.structure_level_2_labels = new_val.structure_level_2_labels && new_val.structure_level_2_labels[0];
data_handle.tipo.structure_level_3 = new_val.structure_level_3 && new_val.structure_level_3[0];
data_handle.tipo.structure_level_3_labels = new_val.structure_level_3_labels && new_val.structure_level_3_labels[0];
data_handle.tipo.structure_level_4 = new_val.structure_level_4 && new_val.structure_level_4[0];
data_handle.tipo.structure_level_4_labels = new_val.structure_level_4_labels && new_val.structure_level_4_labels[0];
}

 tipoCustomScript.CreateWPIVerification_contractor_company_OnChange  = function(data_handle) {
console.log(data_handle);
tipoHandle.getTipo('TipoSSTeams', data_handle.new_value, {}).then((res) => {
    if(res) {
        data_handle.tipo.team_hierarchy_key = res.team_hierarchy_key;
        data_handle.formControl.get('team_hierarchy_key').setValue(res.team_hierarchy_key);
    }
})
}

 tipoCustomScript.CreateWPIVerification_locate = function(data_handle) {
navigator.geolocation.getCurrentPosition(show_map);

function show_map(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  data_handle.tipo.coordinates = "--"+latitude+ "---" + longitude+ "--";
  data_handle.formControl.get('coordinates').setValue("--"+latitude+ "---" + longitude+ "--");
}

return true;
}


 tipoCustomScript.CreateWPIVerification_geo_locn_OnChange  = function(data_handle) {
console.log("data_handle",data_handle)
console.log("data_handle.tipo.geo_locn",data_handle.tipo.geo_locn)
}

//___CreateWPIVerification___
//___SafetyConversations___

 tipoCustomScript.SafetyConversations_where_incidentlocn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.hierarchy_key = new_val.__all__hierarchy__keys && new_val.__all__hierarchy__keys[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.site_level_1 = new_val.site_level_1 && new_val.site_level_1[0];
data_handle.tipo.site_level_1_labels = new_val.site_level_1_labels && new_val.site_level_1_labels[0];
data_handle.tipo.site_level_2 = new_val.site_level_2 && new_val.site_level_2[0];
data_handle.tipo.site_level_2_labels = new_val.site_level_2_labels && new_val.site_level_2_labels[0];
data_handle.tipo.site_level_3 = new_val.site_level_3 && new_val.site_level_3[0];
data_handle.tipo.site_level_3_labels = new_val.site_level_3_labels && new_val.site_level_3_labels[0];
data_handle.tipo.site_level_4 = new_val.site_level_4 && new_val.site_level_4[0];
data_handle.tipo.site_level_4_labels = new_val.site_level_4_labels && new_val.site_level_4_labels[0];
data_handle.tipo.site_level_5 = new_val.site_level_5 && new_val.site_level_5[0];
data_handle.tipo.site_level_5_labels = new_val.site_level_5_labels && new_val.site_level_5_labels[0];
data_handle.tipo.client = new_val.client && new_val.client[0];
data_handle.tipo.client_labels = new_val.client_labels && new_val.client_labels[0];
data_handle.tipo.company = new_val.company && new_val.company[0];
data_handle.tipo.company_labels = new_val.company_labels && new_val.company_labels[0];
data_handle.tipo.forwood_level = new_val.forwood_level && new_val.forwood_level[0];
data_handle.tipo.forwood_level_labels = new_val.forwood_level_labels && new_val.forwood_level_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];
data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
data_handle.tipo.structure_level_1 = new_val.structure_level_1 && new_val.structure_level_1[0];
data_handle.tipo.structure_level_1_labels = new_val.structure_level_1_labels && new_val.structure_level_1_labels[0];
data_handle.tipo.structure_level_2 = new_val.structure_level_2 && new_val.structure_level_2[0];
data_handle.tipo.structure_level_2_labels = new_val.structure_level_2_labels && new_val.structure_level_2_labels[0];
data_handle.tipo.structure_level_3 = new_val.structure_level_3 && new_val.structure_level_3[0];
data_handle.tipo.structure_level_3_labels = new_val.structure_level_3_labels && new_val.structure_level_3_labels[0];
data_handle.tipo.structure_level_4 = new_val.structure_level_4 && new_val.structure_level_4[0];
data_handle.tipo.structure_level_4_labels = new_val.structure_level_4_labels && new_val.structure_level_4_labels[0];
}

 tipoCustomScript.SafetyConversations_OnView  = function(data_handle) {
return tipoHandle.getTipo('SafetyConversations', data_handle.tipo.tipo_id, {}).then((result) => {
        return tipoHandle.getTipos('ActionPlan', {'tipo_filter': 'parent_tipo_id:'+data_handle.tipo.tipo_id}, true).then((res) => {
            data_handle.tipo = {...data_handle.tipo, ...result};
            if(res && res.count > 0) { 
                if(result.incident_action){
                    data_handle.tipo.safety_conversations.conversation_total_actions = result.incident_action.length;
                    let actionPlans = res.filter(item => result.incident_action.some(itemToBeRemoved => itemToBeRemoved.action_plan === item.tipo_id))
                    console.log(actionPlans)
                    data_handle.tipo.safety_conversations.conversation_outstanding_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___INCOMPLETE').length;
                    data_handle.tipo.safety_conversations.conversation_completed_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___COMPLETE').length;
                } else {
                    data_handle.tipo.safety_conversations.conversation_total_actions = 0;
                    data_handle.tipo.safety_conversations.conversation_outstanding_actions = 0;
                    data_handle.tipo.safety_conversations.conversation_completed_actions = 0;
                }
        } else {
            data_handle.tipo.safety_conversations.conversation_total_actions = 0;
            data_handle.tipo.safety_conversations.conversation_outstanding_actions = 0;
            data_handle.tipo.safety_conversations.conversation_completed_actions = 0;
        }
    });
    });
}

 tipoCustomScript.SafetyConversations_OnSave  = function(data_handle) {
if(!data_handle.formControl.valid) {
    return;
}
return tipoHandle.getTipos('ActionPlan', {'tipo_filter': 'parent_tipo_id:'+data_handle.tipo.tipo_id}).then((res) => {
   return tipoHandle.getTipo('SafetyConversations', data_handle.tipo.tipo_id, {}).then((result) => { 
                    data_handle.tipo.safety_conversations.conversation_total_actions = data_handle.tipo.incident_action.length;
                    if(data_handle.tipo.incident_action) {
                    var filtered = res.filter(function (el) {
                    return el != null;
                    });
                    let actionPlans = filtered.filter(item => data_handle.tipo.incident_action.some(itemToBeRemoved => itemToBeRemoved.action_plan === item.tipo_id))
                    console.log(actionPlans)
                    data_handle.tipo.safety_conversations.conversation_outstanding_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___INCOMPLETE').length;
                    data_handle.tipo.safety_conversations.conversation_completed_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___COMPLETE').length;
                } else {
                    data_handle.tipo.safety_conversations.conversation_total_actions = 0;
                    data_handle.tipo.safety_conversations.conversation_outstanding_actions = 0;
                    data_handle.tipo.safety_conversations.conversation_completed_actions = 0;
                }
    });
 })
}

//___SafetyConversations___
//___IncidentDashboard___

 tipoCustomScript.IncidentDashboard_taxonomy_drill_down_DefaultVisualisationOnClickEvent = function(data_handle) {
let filter;
if(data_handle.params.data) {
    filter = `where_incidentlocn.__all__hierarchy__keys:${data_handle.params.data.hierarchy_key}`;
} else {
    filter = `*`;
}
// tipoHandle.routeTo(`/tipo/${data_handle.currentStateTipoName}/8434345600`, {taxonomyfilter:filter},true, true); 
return true;
}

 tipoCustomScript.IncidentDashboard_taxonomy_drill_down_FetchVisualisationChartData = function(data_handle) {
let hierarchy_key = tipoHandle.user_meta.user_attributes.org.hierarchy_key;
// let url;
// if (tipoHandle.tipoInternalHandleService.IsMobileApp()) {
//     url = window.localStorage.getItem('server_url');
// } else {
//     url = window.location.origin + '/';
// }
// if (url === 'https://safetyplus.apps.dev.pluto.forwoodsafety.com/') {
//     hierarchy_key = '6225589586';
// } else if (url === 'https://safetyplus.apps.testing.saas.forwoodsafety.com/') {
//     hierarchy_key = '7284283081.2960281935';
// }  else if (url === 'https://safetyplus.apps.saas.forwoodsafety.com/') {
//     hierarchy_key = '3855895090.6211416783';
// } else {
//     // hierarchy_key = '8037586723.7590247319';
//         hierarchy_key = '6225589586';
// }

return new Promise((resolve,reject)=>{

  
  if(_.isEmpty(hierarchy_key)){
    tipoHandle.showMessage('App company is not configured.', '', 3000);
  }
   tipoHandle.getTipos('TipoSSStructureMasterData',{userkey:tipoHandle.userkey,tipo_action: 'hierachy', tipo_filter: 'hierarchy_key.keyword:'+hierarchy_key+'*'}).then((hierarchy) => {
      let hierarchy_tree = _.get(hierarchy,'0.tree',undefined);
      if(hierarchy_key){
      let company = getHierarchyCompany(hierarchy_tree.find(obj=>obj.hierarchy_key==hierarchy_key.split(".")[0])) || [];
      let childComp = {
          children: []
      };
      if(company.children.length === 0){
          childComp.children.push(company);
      }
      addProperty(company.children.length > 0 ? company.children : childComp.children);
      data_handle.json = {
          tooltip: {},
          series: [{
              "name": _.get(tipoHandle,'application_meta.TipoConfiguration.application_config.tile_label',_.get(tipoHandle,'application_meta.TipoConfiguration.application_config.app_company.company_labels[0]',tipoHandle.user_meta.user_attributes.org.name)),
              "type": 'treemap',
              "roam": false,
              "zoomToNodeRatio":0*0,
              visibleMin: 300,
              data: company.children.length > 0 ? company.children : childComp.children,
              leafDepth: 1,
              "label": {
              "show": true,
              "distance": 0,
              "padding": 5,
              "position": "inside",
              "color": "#fff",
              "overflow": "break",
              "fontSize":16
          },"breadcrumb": {
              "show": true,
              "height": 24,
              "padding": 5,
              "left": "center",
              "top": "bottom",
              "emptyItemWidth": 25,
                borderRadius:20,
              "itemStyle": {
                  "color": "#fafafa",
                  "textStyle": {
                      "color": "#000000",
                      fontSize:15,
                  },
              }
          },
          }]
      }
      }
      resolve(false);
  })
})

  
  function getHierarchyCompany(data){
      if(data && data.hierarchy_key == hierarchy_key){
          return data;
      }else if(data && data.children.length){
          return getHierarchyCompany(data.children.find(obj=>obj.hierarchy_key==hierarchy_key) ? data.children.find(obj=>obj.hierarchy_key==hierarchy_key) : data.children[0].children[0])
      }else {
          return false;
      }
  }
  
  function addProperty(array1){
      _.each(array1,(each_element)=>{
              each_element['value'] = 1;
              if(each_element.children && each_element.children.length){
                  addProperty(each_element.children);
              }
      })
  }




// let hierarchy_key;
// let url;
// if (tipoHandle.tipoInternalHandleService.IsMobileApp()) {
//     url = window.localStorage.getItem('server_url');
// } else {
//     url = window.location.origin + '/';
// }
// if (url === 'https://safetyplus.safetyapps.dev.pluto.forwoodsafety.com/') {
//     //hierarchy_key = '6225589586.5054571018';
//     hierarchy_key = '6225589586';
// } else if (url === 'https://safetyplus.safetyapps.testing.saas.forwoodsafety.com/') {
//    // hierarchy_key = '7284283081.2960281935';
//     hierarchy_key = '7284283081';
// } else if (url === 'https://safetyplus.safetyapps.staging.saas.forwoodsafety.com/') {
//    // hierarchy_key = '3855895090.6211416783';
//    // hierarchy_key = '3855895090';
//     //demo 
//     hierarchy_key = '8458111605.9227434193';
// } else {
//     //hierarchy_key = '8037586723.7590247319';
//     hierarchy_key = '8037586723';
// }
// if (_.isEmpty(hierarchy_key)) {
//     tipoHandle.showMessage('App company is not configured.', '', 3000);
// }
// //var name_of_chart = 'ΔΕΔΔΗΕ';
// var name_of_chart = 'Demo Clients';
// function matchCondition(each_node) {
//     // if(each_node.item_tag !== 'TSF') {
//     //     return true;
//     // }
//     return false;
// }

// return tipoHandle.getTipos('TipoSSStructureMasterData', { userkey: tipoHandle.userkey(), tipo_action: 'hierachy' }).then((hierarchy) => {
//     let hierarchy_tree = _.get(hierarchy, '0.tree', undefined);
//     console.log(JSON.stringify(hierarchy_tree));
//     let arrayOfTiles = [];
//     //   _.each(hierarchy_keys, (each_key) => {
//     getHierarchyCompany(hierarchy_tree[0], hierarchy_key, arrayOfTiles) || [];
//     //    arrayOfTiles.push(company);
//     //   })
//     addProperty(arrayOfTiles);
//     // addProperty(company.children);
//     let leafDepth = 2;
//     let taxonomy_filter = tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter;
//     let h_key = taxonomy_filter && (taxonomy_filter != '*') && taxonomy_filter.substring(0, taxonomy_filter.length - 1).split(':')[1].split('.');
//     if (h_key && h_key.length === 3) {
//         leafDepth = 3;
//     }
//     if (h_key && h_key.length === 4) {
//         leafDepth = 4;
//     }
//     data_handle.json = {
//         tooltip: {},
//         series: [{
//             "name": name_of_chart,
//             "type": 'treemap',
//             "roam": false,
//             "zoomToNodeRatio": 0 * 0,
//             visibleMin: 300,
//             data: arrayOfTiles,
//             leafDepth: leafDepth,
//             "label": {
//                 "show": true,
//                 "distance": 0,
//                 "padding": 5,
//                 "position": "inside",
//                 "color": "#fff",
//                 "overflow": "break",
//                 "fontSize": 16
//             }, "breadcrumb": {
//                 "show": true,
//                 "height": 24,
//                 "padding": 5,
//                 "left": "center",
//                 "top": "bottom",
//                 "emptyItemWidth": 25,
//                 borderRadius: 20,
//                 "itemStyle": {
//                     "color": "#fafafa",
//                     "textStyle": {
//                         "color": "#000000",
//                         fontSize: 15,
//                     },
//                 }
//             },
//         }]
//     }

//     return false;
// })

// function getHierarchyCompany(data, hierarchy_key, company) {
//     if (data && data.hierarchy_key === hierarchy_key) {
//         company.push(data);
//         return;
//     } else if (data && data.children.length) {
//         let child;
//         _.each(data.children, (each) => {
//             child = getHierarchyCompany(each, hierarchy_key, company);
//         })
//         return;
//     } else {
//         return;
//     }
// }

// function addProperty(array1) {
//     _.each(array1, (each_element) => {
//         if (each_element['type'] && each_element['type'] !== 'dam_structure') {
//             if (matchCondition(each_element)) {
//                 each_element['value'] = 0;
//             } else {
//                 each_element['value'] = 1;
//             }
//             if (each_element.children && each_element.children.length > 0) {
//                 addProperty(each_element.children);
//             }
//         }
//     })
// }
}

 tipoCustomScript.IncidentDashboard_OnView  = function(data_handle) {
if (!tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter) {
    tipoHandle.routeTo('/tipo/IncidentDashboard/8434345600', { taxonomyfilter: '*' }, true, true);
}
setTimeout(() => {
    document.querySelectorAll('tp-visualization').forEach(i => {
        i.style.cursor = 'pointer';
        i.addEventListener('click', (e) => {
            let actionurl = `/tipo/CreateIncident`;
            let filter_que;
            if (e.currentTarget.getAttribute('label') === 'Reported Incidents' || e.currentTarget.getAttribute('label') === 'Αναφερόμενα περιστατικά') {
                //window.location.hash = '/tipo/CreateIncident?filter=overview_incident_status___token.keyword:(TT___REPORTED)&perspective=Home';
                filter_que = `overview_incident_status___token.keyword:(TT___REPORTED) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;
            } else if (e.currentTarget.getAttribute('label') === 'Incidents Under Investigation' || e.currentTarget.getAttribute('label') === 'Υπό διερεύνηση περιστατικών') {
                //window.location.hash = '//tipo/CreateIncident?filter=overview_incident_status___token.keyword:(TT___UNDER_INVESTIGATION)&perspective=Home';
                filter_que = `overview_incident_status___token.keyword:(TT___UNDER_INVESTIGATION) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;                
            } else if (e.currentTarget.getAttribute('label') === 'Incidents Under Review' || e.currentTarget.getAttribute('label') === 'Υπό εξέταση περιστατικά') {
                //window.location.hash = '/tipo/CreateIncident?filter=overview_incident_status___token.keyword:(TT___UNDER_REVIEW)&perspective=Home';
                filter_que = `overview_incident_status___token.keyword:(TT___UNDER_REVIEW) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;                                
            } else if (e.currentTarget.getAttribute('label') === 'Incident Status Final' || e.currentTarget.getAttribute('label') === 'Τελική κατάσταση κατάστασης') {
               // window.location.hash = '/tipo/CreateIncident?filter=overview_incident_status___token.keyword:(TT___FINAL)&perspective=Home';
                filter_que = `overview_incident_status___token.keyword:(TT___FINAL) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;                                
            } else {
                //window.location.hash = '/tipo/CreateIncident?filter=overview_incident_status___token.keyword:(TT___CLOSED)&perspective=Home';
                filter_que = `overview_incident_status___token.keyword:(TT___CLOSED) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;                                

            }
            let params = {
                filter: filter_que,
                perspective: `Home`,
            }
            tipoHandle.tipoInternalHandleService.zone.run(() => {
                tipoHandle.routeTo(actionurl, params, false, false);
            });
            


        }, false)
    })
}, 2000)
}

//___IncidentDashboard___
//___Meeting___

 tipoCustomScript.Meeting_where_incidentlocn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.hierarchy_key = new_val.__all__hierarchy__keys && new_val.__all__hierarchy__keys[0];
// data_handle.tipo.business_unit = new_val.business_unit && new_val.business_unit[0];
// data_handle.tipo.business_unit_labels = new_val.business_unit_labels && new_val.business_unit_labels[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.site_level_1 = new_val.site_level_1 && new_val.site_level_1[0];
data_handle.tipo.site_level_1_labels = new_val.site_level_1_labels && new_val.site_level_1_labels[0];
data_handle.tipo.site_level_2 = new_val.site_level_2 && new_val.site_level_2[0];
data_handle.tipo.site_level_2_labels = new_val.site_level_2_labels && new_val.site_level_2_labels[0];
data_handle.tipo.site_level_3 = new_val.site_level_3 && new_val.site_level_3[0];
data_handle.tipo.site_level_3_labels = new_val.site_level_3_labels && new_val.site_level_3_labels[0];
data_handle.tipo.site_level_4 = new_val.site_level_4 && new_val.site_level_4[0];
data_handle.tipo.site_level_4_labels = new_val.site_level_4_labels && new_val.site_level_4_labels[0];
data_handle.tipo.site_level_5 = new_val.site_level_5 && new_val.site_level_5[0];
data_handle.tipo.site_level_5_labels = new_val.site_level_5_labels && new_val.site_level_5_labels[0];
data_handle.tipo.client = new_val.client && new_val.client[0];
data_handle.tipo.client_labels = new_val.client_labels && new_val.client_labels[0];
//data_handle.tipo.physical_loc = new_val.location && new_val.location[0];
//data_handle.tipo.physical_loc_labels = new_val.location_labels && new_val.location_labels[0];
data_handle.tipo.company = new_val.company && new_val.company[0];
data_handle.tipo.company_labels = new_val.company_labels && new_val.company_labels[0];
data_handle.tipo.forwood_level = new_val.forwood_level && new_val.forwood_level[0];
data_handle.tipo.forwood_level_labels = new_val.forwood_level_labels && new_val.forwood_level_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];
data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
data_handle.tipo.structure_level_1 = new_val.structure_level_1 && new_val.structure_level_1[0];
data_handle.tipo.structure_level_1_labels = new_val.structure_level_1_labels && new_val.structure_level_1_labels[0];
data_handle.tipo.structure_level_2 = new_val.structure_level_2 && new_val.structure_level_2[0];
data_handle.tipo.structure_level_2_labels = new_val.structure_level_2_labels && new_val.structure_level_2_labels[0];
data_handle.tipo.structure_level_3 = new_val.structure_level_3 && new_val.structure_level_3[0];
data_handle.tipo.structure_level_3_labels = new_val.structure_level_3_labels && new_val.structure_level_3_labels[0];
data_handle.tipo.structure_level_4 = new_val.structure_level_4 && new_val.structure_level_4[0];
data_handle.tipo.structure_level_4_labels = new_val.structure_level_4_labels && new_val.structure_level_4_labels[0];
}

 tipoCustomScript.Meeting_OnSave  = function(data_handle) {
tipoHandle.tipoInternalHandleService.startStateChange();
if(!data_handle.formControl.valid) {
    return;
}
return tipoHandle.getTipos('ActionPlan', {'tipo_filter': 'parent_tipo_id:'+data_handle.tipo.tipo_id}).then((res) => {
    // if(res.length > 0) {
    //     let updatedActionPlan = res.map((ap) => {
    //         if(ap){
    //             ap['site_labels'] = data_handle.tipo.site_labels;
    //             ap['company_labels'] = data_handle.tipo.company_labels;
    //             ap['client_labels'] = data_handle.tipo.client_labels;
    //             ap['hierarchy_key'] = data_handle.tipo.hierarchy_key;
    //             return ap;
    //         }
    //     });
    //     if(updatedActionPlan.length > 0) {
    //         tipoHandle.saveTipos('ActionPlan', updatedActionPlan);
    //     }
    // }
   return tipoHandle.getTipo('Meeting', data_handle.tipo.tipo_id, {}).then((result) => { 
                    data_handle.tipo.safety_meetings.meeting_total_actions = data_handle.tipo.incident_action.length;
                    if(data_handle.tipo.incident_action) {
                    var filtered = res.filter(function (el) {
                    return el != null;
                    });
                    let actionPlans = filtered.filter(item => data_handle.tipo.incident_action.some(itemToBeRemoved => itemToBeRemoved.action_plan === item.tipo_id))
                    data_handle.tipo.safety_meetings.meeting_outstanding_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___INCOMPLETE').length;
                    data_handle.tipo.safety_meetings.meeting_completed_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___COMPLETE').length;
                } else {
                    data_handle.tipo.safety_meetings.meeting_total_actions = 0;
                    data_handle.tipo.safety_meetings.meeting_outstanding_actions = 0;
                    data_handle.tipo.safety_meetings.meeting_completed_actions = 0;
                }
    });
 })
}

 tipoCustomScript.Meeting_OnView  = function(data_handle) {
return tipoHandle.getTipo('Meeting', data_handle.tipo.tipo_id, {}).then((result) => {
        return tipoHandle.getTipos('ActionPlan', {'tipo_filter': 'parent_tipo_id:'+data_handle.tipo.tipo_id}, true).then((res) => {
            data_handle.tipo = {...data_handle.tipo, ...result};
            if(res && res.count > 0) { 
                if(result.incident_action){
                    data_handle.tipo.safety_meetings.meeting_total_actions = result.incident_action.length;
                    let actionPlans = res.filter(item => result.incident_action.some(itemToBeRemoved => itemToBeRemoved.action_plan === item.tipo_id))
                    data_handle.tipo.safety_meetings.meeting_outstanding_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___INCOMPLETE').length;
                    data_handle.tipo.safety_meetings.meeting_completed_actions = actionPlans.filter(t => t && t.status_ap___token === 'TT___COMPLETE').length;
                } else {
                    data_handle.tipo.safety_meetings.meeting_total_actions = 0;
                    data_handle.tipo.safety_meetings.meeting_outstanding_actions = 0;
                    data_handle.tipo.safety_meetings.meeting_completed_actions = 0;
                }
        } else {
            data_handle.tipo.safety_meetings.meeting_total_actions = 0;
            data_handle.tipo.safety_meetings.meeting_outstanding_actions = 0;
            data_handle.tipo.safety_meetings.meeting_completed_actions = 0;
        }
    });
});
}

//___Meeting___
//___InspectionDashboard___

 tipoCustomScript.InspectionDashboard_taxonomy_drill_down_FetchVisualisationChartData = function(data_handle) {
let hierarchy_key  = tipoHandle.user_meta.user_attributes.org.hierarchy_key;
// let url;
// if (tipoHandle.tipoInternalHandleService.IsMobileApp()) {
//     url = window.localStorage.getItem('server_url');
// } else {
//     url = window.location.origin + '/';
// }
// if (url === 'https://safetyplus.apps.dev.pluto.forwoodsafety.com/') {
//     hierarchy_key = '6225589586';
// } else if (url === 'https://safetyplus.apps.testing.saas.forwoodsafety.com/') {
//     hierarchy_key = '7284283081.2960281935';
// }  else if (url === 'https://safetyplus.apps.saas.forwoodsafety.com/') {
//     hierarchy_key = '3855895090.6211416783';
// } else {
//     // hierarchy_key = '8037586723.7590247319';
//         hierarchy_key = '6225589586';
// }

return new Promise((resolve,reject)=>{

  
  if(_.isEmpty(hierarchy_key)){
    tipoHandle.showMessage('App company is not configured.', '', 3000);
  }
   tipoHandle.getTipos('TipoSSStructureMasterData',{userkey:tipoHandle.userkey,tipo_action: 'hierachy', tipo_filter: 'hierarchy_key.keyword:'+hierarchy_key+'*'}).then((hierarchy) => {
      let hierarchy_tree = _.get(hierarchy,'0.tree',undefined);
      if(hierarchy_key){
      let company = getHierarchyCompany(hierarchy_tree.find(obj=>obj.hierarchy_key==hierarchy_key.split(".")[0])) || [];
      let childComp = {
          children: []
      };
      if(company.children.length === 0){
          childComp.children.push(company);
      }
      addProperty(company.children.length > 0 ? company.children : childComp.children);
      data_handle.json = {
          tooltip: {},
          series: [{
              "name": _.get(tipoHandle,'application_meta.TipoConfiguration.application_config.tile_label',_.get(tipoHandle,'application_meta.TipoConfiguration.application_config.app_company.company_labels[0]',tipoHandle.user_meta.user_attributes.org.name)),
              "type": 'treemap',
              "roam": false,
              "zoomToNodeRatio":0*0,
              visibleMin: 300,
              data: company.children.length > 0 ? company.children : childComp.children,
              leafDepth: 1,
              "label": {
              "show": true,
              "distance": 0,
              "padding": 5,
              "position": "inside",
              "color": "#fff",
              "overflow": "break",
              "fontSize":16
          },"breadcrumb": {
              "show": true,
              "height": 24,
              "padding": 5,
              "left": "center",
              "top": "bottom",
              "emptyItemWidth": 25,
                borderRadius:20,
              "itemStyle": {
                  "color": "#fafafa",
                  "textStyle": {
                      "color": "#000000",
                      fontSize:15,
                  },
              }
          },
          }]
      }
      }
      resolve(false);
  })
})

  
  function getHierarchyCompany(data){
      if(data && data.hierarchy_key == hierarchy_key){
          return data;
      }else if(data && data.children.length){
          return getHierarchyCompany(data.children.find(obj=>obj.hierarchy_key==hierarchy_key) ? data.children.find(obj=>obj.hierarchy_key==hierarchy_key) : data.children[0].children[0])
      }else {
          return false;
      }
  }
  
  function addProperty(array1){
      _.each(array1,(each_element)=>{
              each_element['value'] = 1;
              if(each_element.children && each_element.children.length){
                  addProperty(each_element.children);
              }
      })
  }



// let hierarchy_key;
// let url;
// if (tipoHandle.tipoInternalHandleService.IsMobileApp()) {
//     url = window.localStorage.getItem('server_url');
// } else {
//     url = window.location.origin + '/';
// }
// if (url === 'https://safetyplus.safetyapps.dev.pluto.forwoodsafety.com/') {
//     //hierarchy_key = '6225589586.5054571018';
//     hierarchy_key = '6225589586';
// } else if (url === 'https://safetyplus.safetyapps.testing.saas.forwoodsafety.com/') {
//    // hierarchy_key = '7284283081.2960281935';
//     hierarchy_key = '7284283081';
// }  else if (url === 'https://safetyplus.safetyapps.staging.saas.forwoodsafety.com/') {
//     //hierarchy_key = '3855895090.6211416783';
//    // hierarchy_key = '3855895090';
//    //demo hierarchy
//     hierarchy_key = '8458111605.9227434193';
// } else {
//     //hierarchy_key = '8037586723.7590247319';
//     hierarchy_key = '8037586723';
// }
// if (_.isEmpty(hierarchy_key)) {
//     tipoHandle.showMessage('App company is not configured.', '', 3000);
// }
// var name_of_chart = 'Demo Clients';


// function matchCondition(each_node) {
//     return false;
// }

// return tipoHandle.getTipos('TipoSSStructureMasterData', { userkey: tipoHandle.userkey(), tipo_action: 'hierachy' }).then((hierarchy) => {
//     let hierarchy_tree = _.get(hierarchy, '0.tree', undefined);
//     console.log(JSON.stringify(hierarchy_tree));
//     let arrayOfTiles = [];
//     getHierarchyCompany(hierarchy_tree[0], hierarchy_key, arrayOfTiles) || [];
//     addProperty(arrayOfTiles);
//     let leafDepth = 2;
//     let taxonomy_filter = tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter;
//     let h_key = taxonomy_filter && (taxonomy_filter != '*') && taxonomy_filter.substring(0, taxonomy_filter.length - 1).split(':')[1].split('.');
//     if (h_key && h_key.length === 3) {
//         leafDepth = 3;
//     }
//     if (h_key && h_key.length === 4) {
//         leafDepth = 4;
//     }
//     data_handle.json = {
//         tooltip: {},
//         series: [{
//             "name": name_of_chart,
//             "type": 'treemap',
//             "roam": false,
//             "zoomToNodeRatio": 0 * 0,
//             visibleMin: 300,
//             data: arrayOfTiles,
//             leafDepth: leafDepth,
//             "label": {
//                 "show": true,
//                 "distance": 0,
//                 "padding": 5,
//                 "position": "inside",
//                 "color": "#fff",
//                 "overflow": "break",
//                 "fontSize": 16
//             }, "breadcrumb": {
//                 "show": true,
//                 "height": 24,
//                 "padding": 5,
//                 "left": "center",
//                 "top": "bottom",
//                 "emptyItemWidth": 25,
//                 borderRadius: 20,
//                 "itemStyle": {
//                     "color": "#fafafa",
//                     "textStyle": {
//                         "color": "#000000",
//                         fontSize: 15,
//                     },
//                 }
//             },
//         }]
//     }

//     return false;
// })

// function getHierarchyCompany(data, hierarchy_key, company) {
//     if (data && data.hierarchy_key === hierarchy_key) {
//         company.push(data);
//         return;
//     } else if (data && data.children.length) {
//         let child;
//         _.each(data.children, (each) => {
//             child = getHierarchyCompany(each, hierarchy_key, company);
//         })
//         return;
//     } else {
//         return;
//     }
// }

// function addProperty(array1) {
//     _.each(array1, (each_element) => {
//         if (each_element['type'] && each_element['type'] !== 'dam_structure') {
//             if (matchCondition(each_element)) {
//                 each_element['value'] = 0;
//             } else {
//                 each_element['value'] = 1;
//             }
//             if (each_element.children && each_element.children.length > 0) {
//                 addProperty(each_element.children);
//             }
//         }
//     })
// }
}

 tipoCustomScript.InspectionDashboard_taxonomy_drill_down_DefaultVisualisationOnClickEvent = function(data_handle) {
let filter;
if(data_handle.params.data) {
    filter = `hierarchy_key:${data_handle.params.data.hierarchy_key}*`;
} else {
    filter = `*`;
}
// tipoHandle.routeTo(`/tipo/${data_handle.currentStateTipoName}/8434345600`, {taxonomyfilter:filter},true, true); 
return true;
}

 tipoCustomScript.InspectionDashboard_inspections_count_total_inspections_FetchVisualisationChartData = function(data_handle) {
console.log(data_handle);
}

 tipoCustomScript.InspectionDashboard_OnView  = function(data_handle) {
if (!tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter) {
    tipoHandle.routeTo('/tipo/InspectionDashboard/8434345600', { taxonomyfilter: '*' }, true, true);
}

setTimeout(() => {
    document.querySelectorAll('tp-visualization').forEach(i => {
        i.style.cursor = 'pointer';
        i.addEventListener('click', (e) => {
            let actionurl = `/tipo/WPIChecklist`;
            let filter_que;
            if (e.currentTarget.getAttribute('label') === 'Total Inspections' || e.currentTarget.getAttribute('label') === 'Συνολικές επιθεωρήσεις') {
                filter_que = `${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;
            } else if (e.currentTarget.getAttribute('label') === 'SIF - Work at Height' || e.currentTarget.getAttribute('label') === 'SIF - Εργασία σε ύψος' || e.currentTarget.getAttribute('label') === 'Έλεγχοι SIF - Εργασία σε ύψος') {
                filter_que = `checklist_definition_name___token: (TT___SIF_WORK_AT_HEIGHT) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            } else if (e.currentTarget.getAttribute('label') === 'SIF - Energy Isolation' || e.currentTarget.getAttribute('label') === 'SIF - Ενεργειακή Απομόνωση' || e.currentTarget.getAttribute('label') === 'Έλεγχοι SIF - Απομόνωση της ενέργειας') {
                filter_que = `checklist_definition_name___token: (TT___SIF_ENERGY_ISOLATION) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            } else if (e.currentTarget.getAttribute('label') === 'SIF - Mobile Equipment' || e.currentTarget.getAttribute('label') === 'SIF - Κινητός Εξοπλισμός' || e.currentTarget.getAttribute('label') === 'Έλεγχοι SIF - Κινητός Εξοπλισμός') {
                // filter_que = `checklist_definition_name___token: (TT___SIF_MOBILE_EQUIPMENT_28) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
                filter_que = `checklist_definition_name___token: (TT___SIF_MOBILE_EQUIPMENT) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            }  
            // else if (e.currentTarget.getAttribute('label') === "A' Level" || e.currentTarget.getAttribute('label') === "Επίπεδο Α'") {
            //     filter_que = `checklist_definition_name___token: (TT___A_LEVEL_44) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            // }
            // else if (e.currentTarget.getAttribute('label') === 'SIF - Mobile Equipment' || e.currentTarget.getAttribute('label') === 'SIF - Κινητός Εξοπλισμός') {
            //     filter_que = `checklist_definition_name___token: (TT___SIF_MOBILE_EQUIPMENT) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            // }
            let params = {
                filter:filter_que,
                perspective: `Home`,
            }
            tipoHandle.tipoInternalHandleService.zone.run(() => {
                tipoHandle.routeTo(actionurl, params, false, false);
            });



        }, false)
    })
}, 2000)
}

//___InspectionDashboard___
//___ActionDashboard___

 tipoCustomScript.ActionDashboard_taxonomy_drill_down_FetchVisualisationChartData = function(data_handle) {
let hierarchy_key = tipoHandle.user_meta.user_attributes.org.hierarchy_key ;
// let url;
// if (tipoHandle.tipoInternalHandleService.IsMobileApp()) {
//     url = window.localStorage.getItem('server_url');
// } else {
//     url = window.location.origin + '/';
// }
// if (url === 'https://safetyplus.apps.dev.pluto.forwoodsafety.com/') {
//     hierarchy_key = '6225589586';
// } else if (url === 'https://safetyplus.apps.testing.saas.forwoodsafety.com/') {
//     hierarchy_key = '7284283081.2960281935';
// }  else if (url === 'https://safetyplus.apps.saas.forwoodsafety.com/') {
//     hierarchy_key = '3855895090.6211416783';
// } else {
//     // hierarchy_key = '8037586723.7590247319';
//         hierarchy_key = '6225589586';
// }

return new Promise((resolve,reject)=>{

  
  if(_.isEmpty(hierarchy_key)){
    tipoHandle.showMessage('App company is not configured.', '', 3000);
  }
   tipoHandle.getTipos('TipoSSStructureMasterData',{userkey:tipoHandle.userkey,tipo_action: 'hierachy', tipo_filter: 'hierarchy_key.keyword:'+hierarchy_key+'*'}).then((hierarchy) => {
      let hierarchy_tree = _.get(hierarchy,'0.tree',undefined);
      if(hierarchy_key){
      let company = getHierarchyCompany(hierarchy_tree.find(obj=>obj.hierarchy_key==hierarchy_key.split(".")[0])) || [];
      let childComp = {
          children: []
      };
      if(company.children.length === 0){
          childComp.children.push(company);
      }
      addProperty(company.children.length > 0 ? company.children : childComp.children);      
      data_handle.json = {
          tooltip: {},
          series: [{
              "name": _.get(tipoHandle,'application_meta.TipoConfiguration.application_config.tile_label',_.get(tipoHandle,'application_meta.TipoConfiguration.application_config.app_company.company_labels[0]',tipoHandle.user_meta.user_attributes.org.name)),
              "type": 'treemap',
              "roam": false,
              "zoomToNodeRatio":0*0,
              visibleMin: 300,
              data: company.children.length > 0 ? company.children : childComp.children,
              leafDepth: 1,
              "label": {
              "show": true,
              "distance": 0,
              "padding": 5,
              "position": "inside",
              "color": "#fff",
              "overflow": "break",
              "fontSize":16
          },"breadcrumb": {
              "show": true,
              "height": 24,
              "padding": 5,
              "left": "center",
              "top": "bottom",
              "emptyItemWidth": 25,
                borderRadius:20,
              "itemStyle": {
                  "color": "#fafafa",
                  "textStyle": {
                      "color": "#000000",
                      fontSize:15,
                  },
              }
          },
          }]
      }
      }
      resolve(false);
  })
})

  
  function getHierarchyCompany(data){
      if(data && data.hierarchy_key == hierarchy_key){
          return data;
      }else if(data && data.children.length){
          return getHierarchyCompany(data.children.find(obj=>obj.hierarchy_key==hierarchy_key) ? data.children.find(obj=>obj.hierarchy_key==hierarchy_key) : data.children[0].children[0])
      }else {
          return false;
      }
  }
  
  function addProperty(array1){
      _.each(array1,(each_element)=>{
              each_element['value'] = 1;
              if(each_element.children && each_element.children.length){
                  addProperty(each_element.children);
              }
      })
  }

// //let hierarchy_key='6225589586.5054571018';  
// let hierarchy_key;
// let url;
// if (tipoHandle.tipoInternalHandleService.IsMobileApp()) {
//     url = window.localStorage.getItem('server_url');
// } else {
//     url = window.location.origin + '/';
// }
// if (url === 'https://safetyplus.safetyapps.dev.pluto.forwoodsafety.com/') {
//     hierarchy_key = '6225589586';
// } else if (url === 'https://safetyplus.safetyapps.testing.saas.forwoodsafety.com/') {
//     hierarchy_key = '7284283081';
    
// } else if (url === 'https://safetyplus.safetyapps.staging.saas.forwoodsafety.com/') {
//     //hierarchy_key = '3855895090';
//     //demo hierarchy
//     hierarchy_key = '8458111605.9227434193';
// } else {
//     hierarchy_key = '8037586723';
// }
// if (_.isEmpty(hierarchy_key)) {
//     tipoHandle.showMessage('App company is not configured.', '', 3000);
// }
// //   var name_of_chart = 'HEDNO';
// var name_of_chart = 'Demo Clients';
// function matchCondition(each_node) {
//     // if(each_node.item_tag !== 'TSF') {
//     //     return true;
//     // }
//     return false;
// }

// return tipoHandle.getTipos('TipoSSStructureMasterData', { userkey: tipoHandle.userkey(), tipo_action: 'hierachy' }).then((hierarchy) => {
//     let hierarchy_tree = _.get(hierarchy, '0.tree', undefined);
//     console.log(JSON.stringify(hierarchy_tree));
//     let arrayOfTiles = [];
//     //   _.each(hierarchy_keys, (each_key) => {
//     getHierarchyCompany(hierarchy_tree[0], hierarchy_key, arrayOfTiles) || [];
//     //    arrayOfTiles.push(company);
//     //   })
//     addProperty(arrayOfTiles);
//     // addProperty(company.children);
//     let leafDepth = 2;
//     let taxonomy_filter = tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter;
//     let h_key = taxonomy_filter && (taxonomy_filter != '*') && taxonomy_filter.substring(0, taxonomy_filter.length - 1).split(':')[1].split('.');
//     if (h_key && h_key.length === 3) {
//         leafDepth = 3;
//     }
//     if (h_key && h_key.length === 4) {
//         leafDepth = 4;
//     }
//     data_handle.json = {
//         tooltip: {},
//         series: [{
//             "name": name_of_chart,
//             "type": 'treemap',
//             "roam": false,
//             "zoomToNodeRatio": 0 * 0,
//             visibleMin: 300,
//             data: arrayOfTiles,
//             leafDepth: leafDepth,
//             "label": {
//                 "show": true,
//                 "distance": 0,
//                 "padding": 5,
//                 "position": "inside",
//                 "color": "#fff",
//                 "overflow": "break",
//                 "fontSize": 16
//             }, "breadcrumb": {
//                 "show": true,
//                 "height": 24,
//                 "padding": 5,
//                 "left": "center",
//                 "top": "bottom",
//                 "emptyItemWidth": 25,
//                 borderRadius: 20,
//                 "itemStyle": {
//                     "color": "#fafafa",
//                     "textStyle": {
//                         "color": "#000000",
//                         fontSize: 15,
//                     },
//                 }
//             },
//         }]
//     }

//     return false;
// })

// function getHierarchyCompany(data, hierarchy_key, company) {
//     if (data && data.hierarchy_key === hierarchy_key) {
//         company.push(data);
//         return;
//     } else if (data && data.children.length) {
//         let child;
//         _.each(data.children, (each) => {
//             child = getHierarchyCompany(each, hierarchy_key, company);
//         })
//         return;
//     } else {
//         return;
//     }
// }

// function addProperty(array1) {
//     _.each(array1, (each_element) => {
//         if (each_element['type'] && each_element['type'] !== 'dam_structure') {
//             if (matchCondition(each_element)) {
//                 each_element['value'] = 0;
//             } else {
//                 each_element['value'] = 1;
//             }
//             if (each_element.children && each_element.children.length > 0) {
//                 addProperty(each_element.children);
//             }
//         }
//     })
// }
}

 tipoCustomScript.ActionDashboard_taxonomy_drill_down_DefaultVisualisationOnClickEvent = function(data_handle) {
let filter;
if(data_handle.params.data) {
    filter = `hierarchy_key:${data_handle.params.data.hierarchy_key}*`;
} else {
    filter = `*`;
}
// tipoHandle.routeTo(`/tipo/${data_handle.currentStateTipoName}/8434345600`, {taxonomyfilter:filter},true, true); 
return true;
}

 tipoCustomScript.ActionDashboard_test_DefaultVisualisationOnClickEvent = function(data_handle) {
let actionurl = `/tipo/ActionPlan`;
let params = {
    filter: `action_plan_type___token.keyword:(${data_handle.params.value[2]})`,
    perspective : `Home`,
    menu_filter : data_handle.filter_expression,
    sub_perspective : `ActionplanSubmenu`
    }
tipoHandle.tipoInternalHandleService.zone.run(() => {
  tipoHandle.routeTo(actionurl,params,false, false);
});

return true;
}

 tipoCustomScript.ActionDashboard_action_status_DefaultVisualisationOnClickEvent = function(data_handle) {
let actionurl = `/tipo/ActionPlan`;
let params = {
    filter: `status_ap___token.keyword:(${data_handle.params.value[2]})`,
    perspective : `Home`,
    menu_filter : data_handle.filter_expression,
    sub_perspective : `ActionplanSubmenu`
    }
tipoHandle.tipoInternalHandleService.zone.run(() => {
  tipoHandle.routeTo(actionurl,params,false, false);
});

return true;
}

 tipoCustomScript.ActionDashboard_action_class_DefaultVisualisationOnClickEvent = function(data_handle) {
let actionurl = `/tipo/ActionPlan`;
let params = {
    filter: `action_class___token.keyword:(${data_handle.params.value[2]})`,
    perspective : `Home`,
    menu_filter : data_handle.filter_expression,
    sub_perspective : `ActionplanSubmenu`
    }
tipoHandle.tipoInternalHandleService.zone.run(() => {
  tipoHandle.routeTo(actionurl,params,false, false);
});
return true;
}

 tipoCustomScript.ActionDashboard_OnView  = function(data_handle) {
if (!tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter) {
    tipoHandle.routeTo('/tipo/ActionDashboard/8434345600', { taxonomyfilter: '*' }, true, true);
}
setTimeout(() => {
    document.querySelectorAll('tp-visualization').forEach(i => {
        i.style.cursor = 'pointer';
        i.addEventListener('click', (e) => {
            let actionurl = `/tipo/ActionPlan`;
            const linkText = (i.querySelector('mat-toolbar .nav-link.active')?.innerHTML || '').trim();

            let menu;
       
            if( linkText === 'Inspections' || linkText === 'Επιθεωρήσεις'){
                menu = `verification_tipo_id_labels: (WPIChecklist) AND end_date:[* TO now] AND status_ap___token:(TT___INCOMPLETE) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;
            } else if( linkText === 'Incident' || linkText === 'Περιστατικό'){
                menu = `parent_tipo_name.keyword: (CreateIncident) AND end_date:[* TO now] AND status_ap___token:(TT___INCOMPLETE) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            } else if( linkText === 'Risk' || linkText === 'Κίνδυνος'){
                menu = `verification_tipo_id_labels: (RiskChecklist) AND end_date:[* TO now] AND status_ap___token:(TT___INCOMPLETE) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;
            }else if( linkText === 'Conversations' || linkText === 'συνομιλίες'){
               menu = `parent_tipo_name.keyword: (SafetyConversations) AND end_date:[* TO now] AND status_ap___token:(TT___INCOMPLETE) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}` ;
            }else if( linkText === 'Meetings' || linkText === 'Συναντήσεις'){
               menu = `parent_tipo_name.keyword: (Meeting) AND end_date:[* TO now] AND status_ap___token:(TT___INCOMPLETE) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;   
            } else if (e.currentTarget.getAttribute('label') === 'Total Incident Actions Count' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός δράσεων που προέκυψαν από Διαχείριση Συμβάντων') {
                menu = `parent_tipo_name.keyword: (CreateIncident) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;
            } else if (e.currentTarget.getAttribute('label') === 'Total Inspection Actions Count' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός δράσεων που προέκυψαν από Γενικές Επιθεωρήσεις') {
                menu = `verification_tipo_id_labels: (WPIChecklist) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter} `;
            } else if (e.currentTarget.getAttribute('label') === 'Total Safety Conversation Actions Count' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός δράσεων που προέκυψαν από Συνομιλίες για την Ασφάλεια') {
                menu = `parent_tipo_name.keyword: (SafetyConversations) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter} `;
            } else if (e.currentTarget.getAttribute('label') === 'Total Safety Meeting Actions Count' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός δράσεων που προέκυψαν από Συνεδριάσεις για την Ασφάλεια') {
                menu = `parent_tipo_name.keyword: (Meeting) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter} `;
            } else if (e.currentTarget.getAttribute('label') === 'Total Risk Verifications Actions Count' || e.currentTarget.getAttribute('label') === 'ΣΣυνολικός αριθμός δράσεων που προέκυψαν από Εντοπισμό Κινδύνου' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός δράσεων που προέκυψαν από Εντοπισμό Κινδύνου') {
                menu = `verification_tipo_id_labels.keyword: (RiskChecklist) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;
            }
            let params = {
                
                perspective: `Home`,
                menu_filter: menu,
                sub_perspective: `ActionplanSubmenu`
            }
            tipoHandle.tipoInternalHandleService.zone.run(() => {
                tipoHandle.routeTo(actionurl, params, false, false);
            });

        }, false)
        i.querySelector('mat-toolbar').addEventListener('click', (e) => {
            e.stopPropagation()
        })

    })
}, 2000)
}

//___ActionDashboard___
//___TaskDetails___

 tipoCustomScript.TaskDetails_tool_category_OnChange  = function(data_handle) {
let filter = data_handle.tipo.tool_category.join(' OR ');
let updatedFilter = filter.replace('Process Check', 'process_check').replace('CCV', 'control').replace('Hazard ID', 'hazard').replace('Permit', 'permit').replace('Pre-start', 'pre_start');
data_handle.tipo.tool_filter = updatedFilter;
}

 tipoCustomScript.TaskDetails_tool_OnChange  = function(data_handle) {
console.log('asdafa', data_handle)
}

 tipoCustomScript.TaskDetails_OnView  = function(data_handle) {
data_handle.tipo.checkptwtipo = tipoHandle.tipoInternalHandleService.getCurrentState().tipo_name;
tipoHandle.getTipo('WorkPlanning', tipoHandle.tipoInternalHandleService.getCurrentState().tipo_id).then((response) => {
    if(response && response.crew_members){
                data_handle.tipo.crew_persons = response.crew_members.join(' OR ');
    }
})
}

//___TaskDetails___
//___PTWCopy___

 tipoCustomScript.PTWCopy_appove_ptw = function(data_handle) {
console.log("approve",data_handle);
data_handle.tipo.status_ptw = 'Approved';
tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id,data_handle.tipo).then((response)=> {
    tipoHandle.showMessage('PTW Approved');
    const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
    const PTW_LINK = domain +'#/tipo/PTW/'+ response.data.tipo_id;
    let user = response.data.created_by;
    let subject = 'A PTW has been Approved.';
    let body = `<div><b style="font-size: 22px;">Permit to work Details: </b> <br><br>
                Permit to Work ID: ${response.data.tipo_id} <br>
                Permit Title: ${response.data.permit_title} <br> 
                Permit to work Status: ${response.data.status_ptw} <br>
                Description: A PTW is Approved, please conduct a pre-start safety meeting to 
                discuss the work to be done, the hazards involved, and the controls in place. <br><br>
                You can view the Work plan Details <a href="${PTW_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`
    tipoHandle.sendEmail(user, subject, body);
    
    tipoHandle.getTipo('WorkPlanning',data_handle.tipo.work_plan_id,{}).then((res)=>{
        console.log("res",res);
        res.status = 'PTW Created';
        res.task = response.data;
        tipoHandle.updateTipo('WorkPlanning',res.tipo_id,res).then((result)=> {
                tipoHandle.toTipo('view','WorkPlanning',result.data.tipo_id);
        });
    });
});
return true;
}


 tipoCustomScript.PTWCopy_reject_ptw = function(data_handle) {
tipoHandle.presentTipoForm("Reject Reason", "RejectReason","create", { tipo: {}, hide_actions: true }, []).then(function(res){
    if(res.reject_reason){
        console.log('***', res);
//     // Success function
        const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
        const PTW_LINK = domain +'#/tipo/PTW/'+ data_handle.tipo.tipo_id;
        const APP_LINK = domain +'#/login';
        let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:SiteAdmin))`;
        tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
            const users = res.count > 0 ? res.map(t => t.email) : [];
            let subject = 'The PTW has been Rejected';
            let body = `<div><b style="font-size: 22px;">Permit to work Details: </b> <br><br><br>
                Permit to Work ID: ${data_handle.tipo.tipo_id} <br>
                Permit Title: ${data_handle.tipo.permit_title} <br> 
                Permit to Work Status: ${data_handle.tipo.status_ptw} <br>
                Reject Reason: ${res.reject_reason} <br>
                Description:  The PTW is Rejected and reject reason is ${res.reject_reason} <br><br>
                You can view the PTW details here <a href=" ${PTW_LINK} " target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`;
            tipoHandle.sendEmail('satest@forwoodsafety.com', subject, body);
            //tipoHandle.sendEmail(users.toString(), subject, body);

        })
                tipoHandle.showMessage('PTW Rejected', '');
            data_handle.tipo.status_ptw = 'Rejected';
            tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id, data_handle.tipo).then((res) => {
                console.log(data_handle)
                })
        }
})
    
return true;
}


 tipoCustomScript.PTWCopy_request_approval_ptw = function(data_handle) {
data_handle.tipo.status_ptw = 'Approval Requested';
tipoHandle.updateTipo(data_handle.tipo_name,data_handle.tipo.tipo_id,data_handle.tipo).then(()=>{
    tipoHandle.showMessage('Approval Requested');
});

// Notification
const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
const PTW_LINK = domain +'#/tipo/PTW/'+ data_handle.tipo.tipo_id;
const APP_LINK = domain +'#/login';
let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:(!SiteAdmin)))`;
tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
    const users = res.count > 0 ? res.map(t => t.email) : [];
    let subject = 'A PTW has been requested for Approval.';
    let body = `<div><b style="font-size: 22px;">Permit to work Details: </b> <br><br><br>
                Permit to Work ID: ${data_handle.tipo.tipo_id} <br>
                Permit Title: ${data_handle.tipo.permit_title} <br> 
                Permit to work Status: ${data_handle.tipo.status_ptw} <br>
                Description: The approval is required for a PTW, Request that you take an investigation and update it. <br><br>
                You can view the PTW details here <a href="${PTW_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`;
            tipoHandle.sendEmail('satest@forwoodsafety.com', subject, body);
           // tipoHandle.sendEmail(users.toString(), subject, body);

        })

return true;
}


 tipoCustomScript.PTWCopy_OnView  = function(data_handle) {
data_handle.tipo.work_type_filter = data_handle.tipo.work_type.join(' OR ');
}

 tipoCustomScript.PTWCopy_OnSave  = function(data_handle) {
if(data_handle.mode === 'create'){
    data_handle.tipo.status_ptw = 'Approval Requested';
    tipoHandle.getTipo('WorkPlanning',data_handle.tipo.work_plan_id).then((response)=>{
        response.permit_title = data_handle.tipo.permit_title;
        response.status = 'PTW Initiated'
        tipoHandle.updateTipo('WorkPlanning',data_handle.tipo.work_plan_id,response)
    })
   

const domain = window.localStorage.getItem('server_url') ? window.localStorage.getItem('server_url') : window.location.origin +'/';
const PTW_LINK = domain +'#/tipo/PTW/'+ data_handle.tipo.tipo_id;
const APP_LINK = domain +'#/login';
let filter = `(jobRoleCategory.keyword:(Manager) AND (roles.keyword:(!SiteAdmin)))`;
tipoHandle.getTipos('TipoFIDUser', { tipo_filter: filter }).then((res) => {
    const users = res.count > 0 ? res.map(t => t.email) : [];
    let subject = 'A new PTW has been created';
    let body = `<div><b style="font-size: 22px;">Permit to work Details: </b> <br><br><br>
                Permit to Work ID: ${data_handle.tipo.tipo_id} <br>
                Permit Title: ${data_handle.tipo.permit_title} <br> 
                Permit to work Status: ${data_handle.tipo.status_ptw} <br>
                Description: : A new PTW is created, Request that you take an investigation and update it. <br><br>
                You can view the PTW details here <a href="${PTW_LINK}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" >here</a> <br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`;
    tipoHandle.sendEmail('satest@forwoodsafety.com', subject, body);
            //tipoHandle.sendEmail(users.toString(), subject, body);

    })
}
}

//___PTWCopy___
//___WorkProcessDashboard___

 tipoCustomScript.WorkProcessDashboard_taxonomy_drill_down_DefaultVisualisationOnClickEvent = function(data_handle) {
let selected_tile = "";
        if (data_handle.params.selfType === "breadcrumb") {
          //Breadcrumb - Used for building a filter on backward navigation on the tile chart
          let selected_breadcrumb = _.split(
            this.offlineTileFilter,
            ".",
            _.size(_.get(data_handle.params, "treePathInfo"))
          );
          selected_tile = _.join(selected_breadcrumb, ".");
        } else {
          selected_tile = _.get(data_handle.params, "data.hierarchy_key", undefined);
        }
return true;
}

 tipoCustomScript.WorkProcessDashboard_taxonomy_drill_down_FetchVisualisationChartData = function(data_handle) {
let hierarchy_key='6225589586.5054571018'

return new Promise((resolve,reject)=>{

  
  if(_.isEmpty(hierarchy_key)){
    tipoHandle.showMessage('App company is not configured.', '', 3000);
  }
   tipoHandle.getTipos('TipoSSStructureMasterData',{userkey:tipoHandle.userkey,tipo_action: 'hierachy', tipo_filter: 'hierarchy_key.keyword:'+hierarchy_key+'*'}).then((hierarchy) => {
      let hierarchy_tree = _.get(hierarchy,'0.tree',undefined);
     // console.log(JSON.stringify(hierarchy_tree));
      let company = getHierarchyCompany(hierarchy_tree.find(obj=>obj.hierarchy_key==hierarchy_key.split(".")[0])) || [];
      addProperty(company.children);
      data_handle.json = {
          tooltip: {},
          series: [{
              "name": 'HEDNO',
              "type": 'treemap',
              "roam": false,
              "zoomToNodeRatio":0*0,
              visibleMin: 300,
              data: company.children,
              leafDepth: 1,
              "label": {
              "show": true,
              "distance": 0,
              "padding": 5,
              "position": "inside",
              "color": "#fff",
              "overflow": "break",
              "fontSize":16
          },"breadcrumb": {
              "show": true,
              "height": 24,
              "padding": 5,
              "left": "center",
              "top": "bottom",
              "emptyItemWidth": 25,
                borderRadius:20,
              "itemStyle": {
                  "color": "#fafafa",
                  "textStyle": {
                      "color": "#000000",
                      fontSize:15,
                  },
              }
          },
          }]
      }
      resolve(false);
  })
})

  
  function getHierarchyCompany(data){
      if(data && data.hierarchy_key == hierarchy_key){
          return data;
      }else if(data && data.children.length){
          return getHierarchyCompany(data.children.find(obj=>obj.hierarchy_key==hierarchy_key))
      }else {
          return false;
      }
  }
  
  function addProperty(array1){
      _.each(array1,(each_element)=>{
              each_element['value'] = 1;
              if(each_element.children && each_element.children.length){
                  addProperty(each_element.children);
              } else if(!each_element.audit_config){
                each_element['value'] = 0;
              }
      })
  }

return true;
}

 tipoCustomScript.WorkProcessDashboard_work_plan_by_work_type_DefaultVisualisationOnClickEvent = function(data_handle) {
let actionurl = `/tipo/WorkPlanning`;
let filterdata = data_handle.params.name.replace(/-/g,'%5C%5C-')
let params = {
    filter: `work_type_labels.keyword:((`+filterdata+`))`,
    perspective : 'Home'
    }
tipoHandle.tipoInternalHandleService.zone.run(() => {
  tipoHandle.routeTo(actionurl,params,false, false);
});
return true;
}

 tipoCustomScript.WorkProcessDashboard_OnView  = function(data_handle) {
setTimeout(()=>{
    document.querySelectorAll('tp-visualization').forEach(i => {
    i.style.cursor = 'pointer';
        i.addEventListener('click', (e) => { 
            if(e.currentTarget.getAttribute('label') === 'Submitted') {
                window.location.hash = '/tipo/WorkPlanning?filter=status.keyword:(Submitted)&perspective=Home';
            } else if(e.currentTarget.getAttribute('label') === 'Approved'){
                window.location.hash = '/tipo/WorkPlanning?filter=status.keyword:(Approved)&perspective=Home';
            } else if(e.currentTarget.getAttribute('label') === 'Rejected'){
                window.location.hash = '/tipo/WorkPlanning?filter=status.keyword:(Rejected)&perspective=Home';
            } else if(e.currentTarget.getAttribute('label') === 'PTW Requested'){
                window.location.hash = '/tipo/WorkPlanning?filter=status.keyword:(PTW%20Requested)&perspective=Home';
            } else if(e.currentTarget.getAttribute('label') === 'PTW Initiated'){
                window.location.hash = '/tipo/WorkPlanning?filter=status.keyword:(PTW%20Initiated)&perspective=Home';
            } else if(e.currentTarget.getAttribute('label') === 'PTW Created'){
                window.location.hash = '/tipo/WorkPlanning?filter=status.keyword:(PTW%20Created)&perspective=Home';
            } else {
                window.location.hash = '/tipo/WorkPlanning?filter=status.keyword:(Approval%20Requested)&perspective=Home';

            }


        }, false)
    })
},2000)
}

//___WorkProcessDashboard___
//___ExecutionApproverForm___

 tipoCustomScript.ExecutionApproverForm_OnView  = function(data_handle) {
let cdate = new Date();
let dt = cdate.toISOString();
data_handle.tipo.date_and_time = dt;
console.log(data_handle, ": Execution Approver form")
}

//___ExecutionApproverForm___
//___Info___

 tipoCustomScript.Info_safety_meetings = function(data_handle) {
tipoHandle.presentTipoForm("ContactSupport", "ContactSupport","create", { tipo: {}, hide_actions: true }, []).then(function(result){
    if(result && result.subject && result.body){
        
    // Success function
    let subject = result.subject;
    let body =  `<div>${result.body} <br><br>
                <b style="font-size: 16px;">Login User's Details: </b> <br>
                Name: ${tipoHandle.user_meta.name}<br>
                Email ID :${tipoHandle.user_meta.email} <br>
                Role: ${tipoHandle.user_meta.role}  <br> 
                Current URL: ${window.location.href}<br>
                Browser Configuration: ${navigator.appVersion}<br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`;
        let users = ['support@forwoodsafety.com'];
        tipoHandle.sendEmail(users.toString(), subject, body);
    }
})
    
return true;
}


 tipoCustomScript.Info_safety_conversations = function(data_handle) {
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
// iOS detection from: http://stackoverflow.com/a/9039885/177710
if (/Mac|iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.open('https://apps.apple.com/in/app/safetyapps/id1441083752','_blank');
}
else {
    window.open('https://play.google.com/store/apps/details?id=com.forwoodsafety.safetyapps','_blank');
}
return true;
}


 tipoCustomScript.Info_incident = function(data_handle) {
tipoHandle.routeTo(`tipo/TrainingMaterial/${data_handle.tipo.tipo_id}`,{perspective:`Settings`});
return true;
}


 tipoCustomScript.Info_OnView  = function(data_handle) {
//data_handle.image = ""
}

//___Info___
//___RiskVerificationChecklist___

 tipoCustomScript.RiskVerificationChecklist_OnList  = function(data_handle) {
console.log(data_handle, "WPI Checklist");
}

 tipoCustomScript.RiskVerificationChecklist_OnSave  = function(data_handle) {
if(!data_handle.formControl.valid) {
    return;
}
}

 tipoCustomScript.RiskVerificationChecklist_OnCreate  = function(data_handle) {
console.log("data: ", data_handle);
if(data_handle.mode === "create") {
if(data_handle.tipo.checklist_definition_name == "B' Level") {
    data_handle.tipo.header_level1.basic_organic_entity = data_handle.tipo.header_level2.basic_organic_entity;
    data_handle.tipo.header_level1.operational_unit = data_handle.tipo.header_level2.operational_unit;
    data_handle.tipo.header_level1.vehicle_machine_number = data_handle.tipo.header_level2.vehicle_machine_number;
    data_handle.tipo.header_level1.type_of_work = data_handle.tipo.header_level2.type_of_work;
} else if(data_handle.tipo.checklist_definition_name == "C' Level") {
    data_handle.tipo.header_level1.basic_organic_entity = data_handle.tipo.header_level3.basic_organic_entity;
    data_handle.tipo.header_level1.operational_unit = data_handle.tipo.header_level3.operational_unit;
    data_handle.tipo.header_level1.vehicle_machine_number = data_handle.tipo.header_level3.vehicle_machine_number;
    data_handle.tipo.header_level1.type_of_work = data_handle.tipo.header_level2.type_of_work;
}
}
tipoHandle.updateTipo('WPIChecklist',data_handle.tipo.tipo_id, data_handle.tipo).then((res) => { 
    console.log(res, ": create Checklist")
})
}

 tipoCustomScript.RiskVerificationChecklist_PreServerSave  = function(data_handle) {
console.log("data: ", data_handle);
if(data_handle.tipo.checklist_definition_name == "B' Level") {
    data_handle.tipo.header_level1.basic_organic_entity = data_handle.tipo.header_level2.basic_organic_entity;
    data_handle.tipo.header_level1.operational_unit = data_handle.tipo.header_level2.operational_unit;
    data_handle.tipo.header_level1.vehicle_machine_number = data_handle.tipo.header_level2.vehicle_machine_number;
    data_handle.tipo.header_level1.type_of_work = data_handle.tipo.header_level2.type_of_work;
} else if(data_handle.tipo.checklist_definition_name == "C' Level") {
    data_handle.tipo.header_level1.basic_organic_entity = data_handle.tipo.header_level3.basic_organic_entity;
    data_handle.tipo.header_level1.operational_unit = data_handle.tipo.header_level3.operational_unit;
    data_handle.tipo.header_level1.vehicle_machine_number = data_handle.tipo.header_level3.vehicle_machine_number;
    data_handle.tipo.header_level1.type_of_work = data_handle.tipo.header_level2.type_of_work;
}
tipoHandle.updateTipo('WPIChecklist',data_handle.tipo.tipo_id, data_handle.tipo).then((res) => { 
    console.log(res, ": create Checklist")
})
return true;
}

 tipoCustomScript.RiskVerificationChecklist_OnView  = function(data_handle) {
console.log("data: ", data_handle)
data_handle.tipo.header_level1.site_labels = data_handle.tipo.header_level2.site_labels = data_handle.tipo.site_labels;
}

 tipoCustomScript.RiskVerificationChecklist_list_import_data = function(data_handle) {
tipoHandle.presentTipoForm('Import data', 'TipoImportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


 tipoCustomScript.RiskVerificationChecklist_list_export_data = function(data_handle) {
tipoHandle.presentTipoForm('Export data', 'TipoExportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


//___RiskVerificationChecklist___
//___RiskVerifications___

 tipoCustomScript.RiskVerifications_taxonomy_drill_down_FetchVisualisationChartData = function(data_handle) {
let hierarchy_key='6225589586.5054571018';

return new Promise((resolve,reject)=>{

  
  if(_.isEmpty(hierarchy_key)){
    tipoHandle.showMessage('App company is not configured.', '', 3000);
  }
   tipoHandle.getTipos('TipoSSStructureMasterData',{userkey:tipoHandle.userkey,tipo_action: 'hierachy', tipo_filter: 'hierarchy_key.keyword:'+hierarchy_key+'*'}).then((hierarchy) => {
      let hierarchy_tree = _.get(hierarchy,'0.tree',undefined);
     // console.log(JSON.stringify(hierarchy_tree));
      let company = getHierarchyCompany(hierarchy_tree.find(obj=>obj.hierarchy_key==hierarchy_key.split(".")[0])) || [];
      addProperty(company.children);
      data_handle.json = {
          tooltip: {},
          series: [{
              "name": 'HEDNO',
              "type": 'treemap',
              "roam": false,
              "zoomToNodeRatio":0*0,
              visibleMin: 300,
              data: company.children,
              leafDepth: 1,
              "label": {
              "show": true,
              "distance": 0,
              "padding": 5,
              "position": "inside",
              "color": "#fff",
              "overflow": "break",
              "fontSize":16
          },"breadcrumb": {
              "show": true,
              "height": 24,
              "padding": 5,
              "left": "center",
              "top": "bottom",
              "emptyItemWidth": 25,
                borderRadius:20,
              "itemStyle": {
                  "color": "#fafafa",
                  "textStyle": {
                      "color": "#000000",
                      fontSize:15,
                  },
              }
          },
          }]
      }
      resolve(false);
  })
})

  
  function getHierarchyCompany(data){
      if(data && data.hierarchy_key == hierarchy_key){
          return data;
      }else if(data && data.children.length){
          return getHierarchyCompany(data.children.find(obj=>obj.hierarchy_key==hierarchy_key))
      }else {
          return false;
      }
  }
  
  function addProperty(array1){
      _.each(array1,(each_element)=>{
              each_element['value'] = 1;
              if(each_element.children && each_element.children.length){
                  addProperty(each_element.children);
              } else if(!each_element.audit_config){
                each_element['value'] = 0;
              }
      })
  }

return true;
}

 tipoCustomScript.RiskVerifications_taxonomy_drill_down_DefaultVisualisationOnClickEvent = function(data_handle) {
let selected_tile = "";
        if (data_handle.params.selfType === "breadcrumb") {
          //Breadcrumb - Used for building a filter on backward navigation on the tile chart
          let selected_breadcrumb = _.split(
            this.offlineTileFilter,
            ".",
            _.size(_.get(data_handle.params, "treePathInfo"))
          );
          selected_tile = _.join(selected_breadcrumb, ".");
        } else {
          selected_tile = _.get(data_handle.params, "data.hierarchy_key", undefined);
        }
return true;
}

 tipoCustomScript.RiskVerifications_OnView  = function(data_handle) {
setTimeout(()=>{
    document.querySelectorAll('tp-visualization').forEach(i => {
    i.style.cursor = 'pointer';
        i.addEventListener('click', (e) => { 
            if(e.currentTarget.getAttribute('label') === 'Total Inspections') {
                window.location.hash = '/tipo/WPIChecklist?perspective=Home';
            } else if(e.currentTarget.getAttribute('label') === 'A Level Inspections'){
                window.location.hash = "/tipo/WPIChecklist?filter=checklist_definition_name.keyword:(A'%20Level)&perspective=Home";
            } else if(e.currentTarget.getAttribute('label') === 'A Level Contractor Inspections'){
                window.location.hash = "/tipo/WPIChecklist?filter=checklist_definition_name.keyword:(A%20Level%20Contractor)&perspective=Home";
            } else if(e.currentTarget.getAttribute('label') === 'B Level Inspections'){
                window.location.hash = "/tipo/WPIChecklist?filter=checklist_definition_name.keyword:(B'%20Level)&perspective=Home";
            } else {
                window.location.hash = "/tipo/WPIChecklist?filter=checklist_definition_name.keyword:(C'%20Level)&perspective=Home";
            } 


        }, false)
    })
},2000)
}

//___RiskVerifications___
//___RiskDashboard___

 tipoCustomScript.RiskDashboard_taxonomy_drill_down_DefaultVisualisationOnClickEvent = function(data_handle) {
console.log(data_handle, ": Risk Dashboard");
let filter;
if(data_handle.params.data) {
    filter = `hierarchy_key:${data_handle.params.data.hierarchy_key}*`;
} else {
    filter = `*`;
}
// tipoHandle.routeTo(`/tipo/${data_handle.currentStateTipoName}/8434345600`, {taxonomyfilter:filter},true, true); 
return true;
}

 tipoCustomScript.RiskDashboard_taxonomy_drill_down_FetchVisualisationChartData = function(data_handle) {
let hierarchy_key = tipoHandle.user_meta.user_attributes.org.hierarchy_key;
// let url;
// if (tipoHandle.tipoInternalHandleService.IsMobileApp()) {
//     url = window.localStorage.getItem('server_url');
// } else {
//     url = window.location.origin + '/';
// }
// if (url === 'https://safetyplus.apps.dev.pluto.forwoodsafety.com/') {
//     hierarchy_key = '6225589586';
// } else if (url === 'https://safetyplus.apps.testing.saas.forwoodsafety.com/') {
//     hierarchy_key = '7284283081.2960281935';
// }  else if (url === 'https://safetyplus.apps.saas.forwoodsafety.com/') {
//     hierarchy_key = '3855895090.6211416783';
// } else {
//     // hierarchy_key = '8037586723.7590247319';
//         hierarchy_key = '6225589586';
// }

return new Promise((resolve,reject)=>{

  
  if(_.isEmpty(hierarchy_key)){
    tipoHandle.showMessage('App company is not configured.', '', 3000);
  }
   tipoHandle.getTipos('TipoSSStructureMasterData',{userkey:tipoHandle.userkey,tipo_action: 'hierachy', tipo_filter: 'hierarchy_key.keyword:'+hierarchy_key+'*'}).then((hierarchy) => {
      let hierarchy_tree = _.get(hierarchy,'0.tree',undefined);
      if(hierarchy_key){
    let company = getHierarchyCompany(hierarchy_tree.find(obj=>obj.hierarchy_key==hierarchy_key.split(".")[0])) || [];
    let childComp = {
          children: []
      };
      if(company.children.length === 0){
          childComp.children.push(company);
      }
      addProperty(company.children.length > 0 ? company.children : childComp.children);
      data_handle.json = {
          tooltip: {},
          series: [{
              "name": _.get(tipoHandle,'application_meta.TipoConfiguration.application_config.tile_label',_.get(tipoHandle,'application_meta.TipoConfiguration.application_config.app_company.company_labels[0]',tipoHandle.user_meta.user_attributes.org.name)),
              "type": 'treemap',
              "roam": false,
              "zoomToNodeRatio":0*0,
              visibleMin: 300,
              data: company.children.length > 0 ? company.children : childComp.children,
              leafDepth: 1,
              "label": {
              "show": true,
              "distance": 0,
              "padding": 5,
              "position": "inside",
              "color": "#fff",
              "overflow": "break",
              "fontSize":16
          },"breadcrumb": {
              "show": true,
              "height": 24,
              "padding": 5,
              "left": "center",
              "top": "bottom",
              "emptyItemWidth": 25,
                borderRadius:20,
              "itemStyle": {
                  "color": "#fafafa",
                  "textStyle": {
                      "color": "#000000",
                      fontSize:15,
                  },
              }
          },
          }]
      }
      }
      resolve(false);
  })
})

  
  function getHierarchyCompany(data){
      if(data && data.hierarchy_key == hierarchy_key){
          return data;
      }else if(data && data.children.length){
          return getHierarchyCompany(data.children.find(obj=>obj.hierarchy_key==hierarchy_key) ? data.children.find(obj=>obj.hierarchy_key==hierarchy_key) : data.children[0].children[0])
      }else {
          return false;
      }
  }
  
  function addProperty(array1){
    //   if(array1[0].children.length === 0){
    //             array1['value'] = 0;
    //             if(array1.children && array1.children.length){
    //                 addProperty(each_element.children);
    //             }
    //   } else {
          _.each(array1,(each_element)=>{
                each_element['value'] = 1;
                if(each_element.children && each_element.children.length){
                    addProperty(each_element.children);
                }
        })
    //   }
  }

// //let hierarchy_key='6225589586.5054571018'; 
// let hierarchy_key;
// let url;
// if (tipoHandle.tipoInternalHandleService.IsMobileApp()) {
//     url = window.localStorage.getItem('server_url');
// } else {
//     url = window.location.origin + '/';
// }
// if (url === 'https://safetyplus.safetyapps.dev.pluto.forwoodsafety.com/') {
//     //hierarchy_key = '6225589586.5054571018';
//     hierarchy_key = '6225589586';
// } else if (url === 'https://safetyplus.safetyapps.testing.saas.forwoodsafety.com/') {
//     //hierarchy_key = '7284283081.2960281935';
//     hierarchy_key = '7284283081';
// } else if (url === 'https://safetyplus.safetyapps.staging.saas.forwoodsafety.com/') {
//     //hierarchy_key = '3855895090.6211416783';
//     //hierarchy_key = '3855895090';
//     //demo hierarchy
//     hierarchy_key = '8458111605.9227434193';
// } else {
//     //hierarchy_key = '8037586723.7590247319';
//     hierarchy_key = '8037586723';
// }

// if (_.isEmpty(hierarchy_key)) {
//     tipoHandle.showMessage('App company is not configured.', '', 3000);
// }
// var name_of_chart = 'Demo Clients';

// function matchCondition(each_node) {
//     // if(each_node.item_tag !== 'TSF') {
//     //     return true;
//     // }
//     return false;
// }

// return tipoHandle.getTipos('TipoSSStructureMasterData', { userkey: tipoHandle.userkey(), tipo_action: 'hierachy' }).then((hierarchy) => {
//     let hierarchy_tree = _.get(hierarchy, '0.tree', undefined);
//     console.log(JSON.stringify(hierarchy_tree));
//     let arrayOfTiles = [];
//     //   _.each(hierarchy_keys, (each_key) => {
//     getHierarchyCompany(hierarchy_tree[0], hierarchy_key, arrayOfTiles) || [];
//     //    arrayOfTiles.push(company);
//     //   })
//     addProperty(arrayOfTiles);
//     // addProperty(company.children);
//     let leafDepth = 2;
//     let taxonomy_filter = tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter;
//     let h_key = taxonomy_filter && (taxonomy_filter != '*') && taxonomy_filter.substring(0, taxonomy_filter.length - 1).split(':')[1].split('.');
//     if (h_key && h_key.length === 3) {
//         leafDepth = 3;
//     }
//     if (h_key && h_key.length === 4) {
//         leafDepth = 4;
//     }
//     data_handle.json = {
//         tooltip: {},
//         series: [{
//             "name": name_of_chart,
//             "type": 'treemap',
//             "roam": false,
//             "zoomToNodeRatio": 0 * 0,
//             visibleMin: 300,
//             data: arrayOfTiles,
//             leafDepth: leafDepth,
//             "label": {
//                 "show": true,
//                 "distance": 0,
//                 "padding": 5,
//                 "position": "inside",
//                 "color": "#fff",
//                 "overflow": "break",
//                 "fontSize": 16
//             }, "breadcrumb": {
//                 "show": true,
//                 "height": 24,
//                 "padding": 5,
//                 "left": "center",
//                 "top": "bottom",
//                 "emptyItemWidth": 25,
//                 borderRadius: 20,
//                 "itemStyle": {
//                     "color": "#fafafa",
//                     "textStyle": {
//                         "color": "#000000",
//                         fontSize: 15,
//                     },
//                 }
//             },
//         }]
//     }

//     return false;
// })

// function getHierarchyCompany(data, hierarchy_key, company) {
//     if (data && data.hierarchy_key === hierarchy_key) {
//         company.push(data);
//         return;
//     } else if (data && data.children.length) {
//         let child;
//         _.each(data.children, (each) => {
//             child = getHierarchyCompany(each, hierarchy_key, company);
//         })
//         return;
//     } else {
//         return;
//     }
// }

// function addProperty(array1) {
//     _.each(array1, (each_element) => {
//         if (each_element['type'] && each_element['type'] !== 'dam_structure') {
//             if (matchCondition(each_element)) {
//                 each_element['value'] = 0;
//             } else {
//                 each_element['value'] = 1;
//             }
//             if (each_element.children && each_element.children.length > 0) {
//                 addProperty(each_element.children);
//             }
//         }
//     })
// }
}

 tipoCustomScript.RiskDashboard_OnView  = function(data_handle) {
if (!tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter) {
    tipoHandle.routeTo('/tipo/RiskDashboard/8434345600', { taxonomyfilter: '*' }, true, true);
}
setTimeout(() => {
    document.querySelectorAll('tp-visualization').forEach(i => {
        i.style.cursor = 'pointer';
        i.addEventListener('click', (e) => {
            let actionurl = `/tipo/RiskChecklist`;
            let filter_qu;
            if (e.currentTarget.getAttribute('label') === 'Total Verifications Count' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός επαληθεύσεων') {
                filter_qu = `${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`;
            } else if (e.currentTarget.getAttribute('label') === 'Total Lifting Operations Count' || e.currentTarget.getAttribute('label') === 'Συνολικός Αριθμός Επιχειρήσεων Ανύψωσης' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός περιπτώσεων από Επιχειρήσεις Ανύψωσης') {
            //    filter_qu = `checklist_definition_tipo_id.keyword:(8763975670) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
                    filter_qu = `risk___token.keyword:(TT___LIFTING_OPERATIONS) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            } else if (e.currentTarget.getAttribute('label') === 'Total Falling Objects Count' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός αντικειμένων που πέφτουν' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός περιπτώσεων από Πτώση Αντικειμένων') {
                // filter_qu = `checklist_definition_tipo_id.keyword:(6036445338) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
                filter_qu = `risk___token.keyword:(TT___FALLING_OBJECTS) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            }
            else if (e.currentTarget.getAttribute('label') === 'Total Contact with Electricity' || e.currentTarget.getAttribute('label') === 'Ολική επαφή με την ηλεκτρική ενέργεια' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός περιπτώσεων από Επαφή με Ηλεκτρική Ενέργεια') {
                //window.location.hash = '/tipo/RiskChecklist?filter=checklist_definition_tipo_id.keyword:(5170324869)&perspective=Home';
                filter_qu = `risk___token.keyword:(TT___CONTACT_WITH_ELECTRICITY) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            } else if (e.currentTarget.getAttribute('label') === 'Total number of cases of Vehicle Collision or Rollover' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός περιπτώσεων από Σύγκρουση ή Ανατροπή οχημάτων') {
                //window.location.hash = '/tipo/RiskChecklist?filter=checklist_definition_tipo_id.keyword:(5170324869)&perspective=Home';
                filter_qu = `risk___token.keyword:(TT___VEHICLE_COLLISION_OR_ROLLOVER) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            } else if (e.currentTarget.getAttribute('label') === 'Total number of cases of Fall from height' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός περιπτώσεων από Πτώση από ύψος') {
                //window.location.hash = '/tipo/RiskChecklist?filter=checklist_definition_tipo_id.keyword:(5170324869)&perspective=Home';
                filter_qu = `risk___token.keyword:(TT___FALL_FROM_HEIGHT) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            } 
            //  else if (e.currentTarget.getAttribute('label') === 'Total Mining Details Count' || e.currentTarget.getAttribute('label') === 'Συνολικός αριθμός λεπτομερειών εξόρυξης') {
            //     window.location.hash = '/tipo/RiskChecklist?filter=checklist_definition_tipo_id.keyword:(5170324869)&perspective=Home';
            //     filter_qu = `checklist_definition_tipo_id.keyword:(5170324869) AND ${tipoHandle.tipoInternalHandleService.tipoStateService.currentRouteParams.taxonomyfilter}`
            // }
            let params = {
               filter: filter_qu,
               perspective: `Home`
               
            }
            tipoHandle.tipoInternalHandleService.zone.run(() => {
                tipoHandle.routeTo(actionurl, params, false, false);
            });
            


        }, false)
    })
}, 2000)
}

//___RiskDashboard___
//___MasterDataTypes___

 tipoCustomScript.MasterDataTypes_list_import_data = function(data_handle) {
tipoHandle.presentTipoForm('Import data', 'TipoImportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


//___MasterDataTypes___
//___TipoSSConfigureAnswerType___

 tipoCustomScript.TipoSSConfigureAnswerType_list_export = function(data_handle) {
tipoHandle.presentTipoForm('Export data', 'TipoExportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, ___hide_cancel_action___: false, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


 tipoCustomScript.TipoSSConfigureAnswerType_list_import = function(data_handle) {
tipoHandle.presentTipoForm('Import data', 'TipoImportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, ___hide_cancel_action___: false, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}

//___TipoSSConfigureAnswerType___
//___TipoSSTokens___

 tipoCustomScript.TipoSSTokens_list_import = function(data_handle) {
tipoHandle.presentTipoForm('Import data', 'TipoImportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


 tipoCustomScript.TipoSSTokens_list_export = function(data_handle) {
tipoHandle.presentTipoForm('Export data', 'TipoExportDataPlugin', 'view', { tipo: data_handle, hide_actions: true, ___hide_done_action___: true, tipo_handle: this.tipo_handle }, [], false, this.tipoHandleService);
return true;
}


//___TipoSSTokens___
//___LandingPage___

 tipoCustomScript.LandingPage_contact_support = function(data_handle) {
tipoHandle.presentTipoForm("ContactSupport", "ContactSupport","create", { tipo: {}, hide_actions: true }, []).then(function(result){
    if(result && result.subject && result.body){
        
    // Success function
    let subject = result.subject;
    let body =  `<div>${result.body} <br><br>
                <b style="font-size: 16px;">Login User's Details: </b> <br>
                Name: ${tipoHandle.user_meta.name}<br>
                Email ID :${tipoHandle.user_meta.email} <br>
                Role: ${tipoHandle.user_meta.role}  <br> 
                Current URL: ${window.location.href}<br>
                Browser Configuration: ${navigator.appVersion}<br><br><br>
                <i>Kind Regards, <br>
                Forwood Safety Team</i>
                </div>`;
        let users = ['support@forwoodsafety.com'];
        tipoHandle.sendEmail(users.toString(), subject, body);
    }
})
    
return true;
}


 tipoCustomScript.LandingPage_download_app = function(data_handle) {
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
if (/Mac|iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.open('https://apps.apple.com/in/app/safetyapps/id1441083752','_blank');
}
else {
    window.open('https://play.google.com/store/apps/details?id=com.forwoodsafety.safetyapps','_blank');
}
return true;
}


 tipoCustomScript.LandingPage_training_videos = function(data_handle) {
tipoHandle.routeTo(`tipo/TrainingMaterial/8434345600`,{perspective:`Settings`});
return true;
}


//___LandingPage___
//___TrainingMaterial___

 tipoCustomScript.TrainingMaterial_OnView  = function(data_handle) {
if(tipoHandle.user_meta.user_attributes.user.locale === 'en') {
   data_handle.tipo.description = 'Take a quick look on our enterprise grade mobile application for handling Safety and Risk Management in the workplace which leads to Fatality free environment.';
} else {
    data_handle.tipo.description = 'Ρίξτε μια γρήγορη ματιά στην εφαρμογή μας για κινητές συσκευές εταιρικής ποιότητας για το χειρισμό της Ασφάλειας και της Διαχείρισης Κινδύνων στο χώρο εργασίας που οδηγεί σε περιβάλλον χωρίς θάνατο.';
}
}

//___TrainingMaterial___
//___VehicleRegistry___

 tipoCustomScript.VehicleRegistry_choose_locn_OnChange  = function(data_handle) {
const new_val = data_handle.new_value;
data_handle.tipo.hierarchy_key = new_val.__all__hierarchy__keys && new_val.__all__hierarchy__keys[0];
data_handle.tipo.site = new_val.site && new_val.site[0];
data_handle.tipo.site_labels = new_val.site_labels && new_val.site_labels[0];
data_handle.tipo.site_level_1 = new_val.site_level_1 && new_val.site_level_1[0];
data_handle.tipo.site_level_1_labels = new_val.site_level_1_labels && new_val.site_level_1_labels[0];
data_handle.tipo.site_level_2 = new_val.site_level_2 && new_val.site_level_2[0];
data_handle.tipo.site_level_2_labels = new_val.site_level_2_labels && new_val.site_level_2_labels[0];
data_handle.tipo.site_level_3 = new_val.site_level_3 && new_val.site_level_3[0];
data_handle.tipo.site_level_3_labels = new_val.site_level_3_labels && new_val.site_level_3_labels[0];
data_handle.tipo.site_level_4 = new_val.site_level_4 && new_val.site_level_4[0];
data_handle.tipo.site_level_4_labels = new_val.site_level_4_labels && new_val.site_level_4_labels[0];
data_handle.tipo.site_level_5 = new_val.site_level_5 && new_val.site_level_5[0];
data_handle.tipo.site_level_5_labels = new_val.site_level_5_labels && new_val.site_level_5_labels[0];
data_handle.tipo.client = new_val.client && new_val.client[0];
data_handle.tipo.client_labels = new_val.client_labels && new_val.client_labels[0];
data_handle.tipo.company = new_val.company && new_val.company[0];
data_handle.tipo.company_labels = new_val.company_labels && new_val.company_labels[0];
data_handle.tipo.forwood_level = new_val.forwood_level && new_val.forwood_level[0];
data_handle.tipo.forwood_level_labels = new_val.forwood_level_labels && new_val.forwood_level_labels[0];
data_handle.tipo.structure = new_val.structure && new_val.structure[0];
data_handle.tipo.structure_labels = new_val.structure_labels && new_val.structure_labels[0];
data_handle.tipo.structure_level_1 = new_val.structure_level_1 && new_val.structure_level_1[0];
data_handle.tipo.structure_level_1_labels = new_val.structure_level_1_labels && new_val.structure_level_1_labels[0];
data_handle.tipo.structure_level_2 = new_val.structure_level_2 && new_val.structure_level_2[0];
data_handle.tipo.structure_level_2_labels = new_val.structure_level_2_labels && new_val.structure_level_2_labels[0];
data_handle.tipo.structure_level_3 = new_val.structure_level_3 && new_val.structure_level_3[0];
data_handle.tipo.structure_level_3_labels = new_val.structure_level_3_labels && new_val.structure_level_3_labels[0];
data_handle.tipo.structure_level_4 = new_val.structure_level_4 && new_val.structure_level_4[0];
data_handle.tipo.structure_level_4_labels = new_val.structure_level_4_labels && new_val.structure_level_4_labels[0];
}

 tipoCustomScript.VehicleRegistry_list_bulk_disable = function(data_handle) {
console.log(data_handle, '###');
//let update_records = _.map(data_handle.selected_tipos, 'tipo_id')
//let query_params = { tipo_filter: `tipo_id:${update_records.join(' OR ')}` }
var count = 0;
_.forEach(data_handle.selected_tipos, (each, index)=> {
    count++;
    each.status = false;
    if(data_handle.selected_tipos.length == count) {
        $('tp-vehicleregistry mat-checkbox').removeClass('mat-checkbox-checked');
        tipoHandle.updateTipo('VehicleRegistry',each.tipo_id,{})
    }
    
})

// tipoHandle.getTipos('VehicleRegistry', query_params).then((res) => {
//     res.map((VehicleStatus) => {
//         $('tp-vehicleregistry mat-checkbox').removeClass('mat-checkbox-checked');
//         VehicleStatus.status = false;
//         tipoHandle.updateTipo('VehicleRegistry', VehicleStatus.tipo_id, VehicleStatus);
        
//     });
// })
}


//___VehicleRegistry___
//___LocateOffline___

 tipoCustomScript.LocateOffline_locate = function(data_handle) {
console.log("locate",data_handle);

 if (navigator && navigator.geolocation) {
            navigator.geolocation.watchPosition(successCallback, errorCallback);
        } else {
            console.log('Geolocation is not supported');
        }

 
function errorCallback(err) {
    // const { key } = navigation.currentEntry;
    // navigation.traverseTo(key);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address':'Koyambedu, Chennai, Tamil Nadu 600107'
    },(res,status)=>{
        console.log("lati",res[0].geometry.location.lat())
        console.log("longi",res[0].geometry.location.lng())
    })
    return false;
    console.log("error",err)
}
 
function successCallback(position) {
       var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("lat",latitude);
  console.log("long",longitude)
  data_handle.tipo.coordinates = "--"+latitude+ "---" + longitude+ "--";
  data_handle.formControl.get('coordinates').setValue("--"+latitude+ "---" + longitude+ "--");
    }

return true;
}


 tipoCustomScript.LocateOffline_OnView  = function(data_handle) {
// if(tipoHandle.isOnline) {
//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode({
//         'address': data_handle.tipo.geo_locn
//     },(res,status)=>{
//         console.log("lati",res[0].geometry.location.lat())
//         console.log("longi",res[0].geometry.location.lng());
//         data_handle.tipo.geo_locn_location.lat = res[0].geometry.location.lat()
//         data_handle.tipo.geo_locn_location.long = res[0].geometry.location.lng()
//         console.log("data",data_handle);
//         tipoHandle.updateTipo('LocateOffline',data_handle.tipo.tipo_id,data_handle.tipo);
//         const myLatLng = { lat: res[0].geometry.location.lat(), lng: res[0].geometry.location.lng() }
//         const maploc = new google.maps.Map(document.getElementById('map-canvas'), {
//             zoom: 17,
//             center: myLatLng,
//         });
//         var marker = new google.maps.Marker({
//             position: myLatLng,
//             maploc,
//             title: data_handle.tipo.geo_locn,
//         });
//         marker.setMap(maploc);
        
//     })  
// }
}

 tipoCustomScript.LocateOffline_PostServerSave  = function(data_handle) {
if(tipoHandle.isOnline && !data_handle.tipo.geo_locn_location) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': data_handle.tipo.geo_locn
    },(res,status)=>{
        console.log("lati",res[0].geometry.location.lat())
        console.log("longi",res[0].geometry.location.lng());
        data_handle.tipo.geo_locn_location = {
            'lat' : res ? res[0].geometry.location.lat() : 0,
            'long' : res ? res[0].geometry.location.lng() : 0
        }
        console.log("data",data_handle);
        tipoHandle.updateTipo('LocateOffline',data_handle.tipo.tipo_id,data_handle.tipo);
        const myLatLng = { 
            lat: res ? res[0].geometry.location.lat() : 0, 
            lng: res ? res[0].geometry.location.lng() : 0
        }
        const maploc = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 17,
            center: myLatLng,
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            maploc,
            title: data_handle.tipo.geo_locn,
        });
        marker.setMap(maploc);
    })  
}
}

//___LocateOffline___

 
 //END_OF_CUSTOM_SERVICE 
if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
  // Expose Lodash on the global object to prevent errors when Lodash is
  // loaded by a script tag in the presence of an AMD loader.
  // See http://requirejs.org/docs/errors.html#mismatch for more details.
  // Use `_.noConflict` to remove Lodash from the global object.
  root.tipoCustomScript = tipoCustomScript;

  // Define as an anonymous module so, through path mapping, it can be
  // referenced as the "underscore" module.
  define(function() {
    return tipoCustomScript;
  });
}
// Check for `exports` after `define` in case a build optimizer adds it.
else if (freeModule) {
  // Export for Node.js.
  (freeModule.exports = tipoCustomScript).tipoCustomScript = tipoCustomScript;
  // Export for CommonJS support.
  freeExports.tipoCustomScript = tipoCustomScript;
}
else {
  // Export to the global object.
  root.tipoCustomScript = tipoCustomScript;
}
}.call(this));

