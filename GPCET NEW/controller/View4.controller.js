sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("idapp.project1.controller.View4", {
            onInit: function () {

                // var path = jQuery.sap.getModulePath("idapp.project1", "/model/Students deatails.json");
                // var oModel = new sap.ui.model.json.JSONModel(path);
                // this.getView().setModel(oModel, "oModel1");

                var dataModel = this.getOwnerComponent().getModel("tableData");
                this.getView().setModel(dataModel, "sOrder1");

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View4").attachPatternMatched(this.onRouteMatch, this);


            },
            onRouteMatch: function (evt) {

                // var osc = this.getView().getModel("oModel1").getData();
                // var array1 = [{
                //     "Attendence": "78%",
                //     "preport": "8.2",
                //     "mid": "442",
                //     "feedue": "₹66500.00",
                //     "PinNumber": "123",
                //     "Name": "Teja",
                //     "Date of Birth": "01-04-2001",
                //     "Age": "22",
                //     "Branch": " Mechanical",
                //     "Year": "4th year",
                //     "Job": "VERNASOFT Company",
                //     "Number": "9550840453",
                //     "Alternative Mobile Number": "6281245810",
                //     "Email ID": "tejabhutesh@gmail.com",
                //     "Address": "NKP,MADAKASIRA,INDIA",
                //     "image": "https://replicate.delivery/pbxt/Aebz7C625lWcFCuYjqiIARN8CYO538qubVl9ek4dNO04yQfgA/out..jpg"

                // },
                // {
                //     "Attendence": "67%",
                //     "preport": "7.2",
                //     "mid": "442",
                //     "feedue": "₹6500.00",
                //     "PinNumber": "19at5a0307",
                //     "Name": "Ramesh",
                //     "Date of Birth": "07-07-2001",
                //     "Age": "26",
                //     "Branch": " Mechanical",
                //     "Year": "4th year",
                //     "Job": "WIPRO,INFOSYS Companys",
                //     "Number": "9848913818",
                //     "Alternative Mobile Number": "8309865059",
                //     "Email ID": "19at5a0307@gpcet.ac.in",
                //     "Address": "Kallukunta,Adhoni,INDIA",
                //     "image": "https://replicate.delivery/pbxt/0WO3eIxMHISBe0GjsWFqHf8cdYleuPxZjmi9mbBgprtejIEEC/out..jpg"

                // }, {
                //     "Attendence": "83%",
                //     "preport": "8.8",
                //     "mid": "442",
                //     "feedue": "₹66500.00",
                //     "PinNumber": "19at5a0308",
                //     "Name": "Sandeep",
                //     "Date of Birth": "01-04-2001",
                //     "Age": "21",
                //     "Branch": " Mechanical",
                //     "Year": "4th year",
                //     "Job": "BUSINESS",
                //     "Number": "9493920813",
                //     "Alternative Mobile Number": "9493920813",
                //     "Email ID": "19at5a0308@gpcet.ac.in",
                //     "Address": "Penchikalapadu,Kurnool,INDIA",
                //     "image": "https://replicate.delivery/pbxt/m70pKJUmQCZtE1pNd2s2x7DIoyBHjUV8fMefz85CgvmpUCBhA/out..jpg"
                // },
                // {
                //     "Attendence": "56%",
                //     "preport": "9.2",
                //     "mid": "442",
                //     "feedue": "₹30500.00",
                //     "PinNumber": "19at5a0312",
                //     "Name": "Suresh",
                //     "Date of Birth": "21-06-1999",
                //     "Age": "21",
                //     "Branch": " Mechanical",
                //     "Year": "4th year",
                //     "Job": "WIPRO Company",
                //     "Number": "9493920813",
                //     "Alternative Mobile Number": "9493920813",
                //     "Email ID": "19at5a0308@gpcet.ac.in",
                //     "Address": "Penchikalapadu,Kurnool,INDIA",
                //     "image": "https://replicate.delivery/pbxt/4biMpTj8oybDLVf50SQ3fVblOEgV7v4va7BVOkin1Z9l9ggQA/out..jpg"
                // },
                // {
                //     "Attendence": "80%",
                //     "preport": "9.0",
                //     "mid": "442",
                //     "feedue": "₹6500.00",
                //     "PinNumber": "19at5a0310",
                //     "Name": "Sunil",
                //     "Date of Birth": "11-03-2001",
                //     "Age": "21",
                //     "Branch": " Mechanical",
                //     "Year": "4th year",
                //     "Job": "INFOSYS Company",
                //     "Number": "9346273737",
                //     "Alternative Mobile Number": "9346273737",
                //     "Email ID": "19at5a0310@gpcet.ac.in",
                //     "Address": "Nandhikotkuur,Kurnool,INDIA",
                //     "image": "https://replicate.delivery/pbxt/IPfXLjnghuRiMaoGFALfWfdnVSfSRkGtoCL7QVo3uTCJxaCCB/out..jpg"
                // }, {
                //     "Attendence": "98%",
                //     "preport": "7.6",
                //     "mid": "442",
                //     "feedue": "₹66500.00",
                //     "PinNumber": "19at5a0319",
                //     "Name": "Sai",
                //     "Date of Birth": "01-03-1998",
                //     "Age": "23",
                //     "Branch": " Mechanical",
                //     "Year": "4th year",
                //     "Job": "KIA Company",
                //     "Number": "8688859166",
                //     "Alternative Mobile Number": "9959553080",
                //     "Email ID": "19at5a0319@gpcet.ac.in",
                //     "Address": "SRISAILAM,INDIA",
                //     "image": "https://replicate.delivery/pbxt/wCYBUhq1JtINP12R6lV09VMyQXKam7YPSPjROk8QsXPzONIE/out..jpg"
                // }, {
                //     "Attendence": "77%",
                //     "preport": "6.8",
                //     "mid": "432",
                //     "feedue": "₹6500.00",
                //     "PinNumber": "19at5a0302",
                //     "Name": "Koti",
                //     "Date of Birth": "21-05-1997",
                //     "Age": "25",
                //     "Branch": " Mechanical",
                //     "Year": "4th year",
                //     "Job": "WIPRO,INFOSYS Companys",
                //     "Number": "9398013755",
                //     "Alternative Mobile Number": "9573203862",
                //     "Email ID": "19at5a0302@gpcet.ac.in",
                //     "Address": "Athmakur,INDIA",
                //     "image": "https://replicate.delivery/pbxt/oICZY9mDaRZfICQBRkmQoJft5SDuuren889w6WJiB5qm0BBhA/out..jpeg"
                // }, {
                //     "Attendence": "86.5%",
                //     "preport": "7.0",
                //     "mid": "401",
                //     "feedue": "₹30500.00",
                //     "PinNumber": "18at1a0335",
                //     "Name": "Suresh",
                //     "Date of Birth": "12-05-2001",
                //     "Age": "21",
                //     "Branch": " Mechanical",
                //     "Year": "4th year",
                //     "Job": "WIPRO,INFOSYS Companys",
                //     "Number": "9505813217",
                //     "Alternative Mobile Number": "9505813217",
                //     "Email ID": "19at5a0302@gpcet.ac.in",
                //     "Address": "Kurnool,INDIA",
                //     "image": "https://replicate.delivery/pbxt/Acd3L4CG8wq0H1Hszc89auIfr9m4VSeWWSpXfeqH09SS9TDCB/out..jpg"
                // }]

                var array1 = evt.mParameters.view.oModels.sOrder1.oData.Studentdeatails;
                var data = [];
                var KeyID2 = evt.mParameters.arguments.name1;
                var KeyID3 = evt.mParameters.arguments.name2;


                for (var i = 0; i < array1.length; i++) {

                    if (KeyID2 === array1[i].PinNumber && KeyID3 === array1[i].Name) {
                        data.push(array1[i]);

                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(data);
                        this.getView().setModel(oModel, "Data2");
                    }
                }
            },
            onNavBack: function () {
                history.go(-1);

            },
            Logout: function () {

                MessageBox.success("Successful! Your account Logged out.", {
                    actions: [MessageBox.Action.CANCEL],
                    details:
                        "<p>Do you Want to go to Login Portal(Y/N)? <a href='https://port8081-workspaces-ws-tm25h.us10.trial.applicationstudio.cloud.sap/test/flpSandbox.html?sap-ui-xx-viewCache=false#idappproject1-display&/View2'> YES</a>.",
                    contentWidth: "100px",

                });
            }, Logout1: function () {
                MessageBox.success("Successful! Your account Logged out.");
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");
            },

            onPressMasterBack: function () {
                var that = this;
                that.getSplitContObj().backMaster();
                that.getSplitContObj().backDetail();
            },
            onPressDetailBack: function () {
                this.getSplitContObj().backDetail();
            },
            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

                this.getSplitContObj().toDetail(this.createId(sToPageId));
            },
            getSplitContObj: function () {
                var result = this.byId("SplitContDemo");
                if (!result) {
                    Log.error("SplitApp object can't be found");
                }
                return result;
            },
            myprofile: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("myprofile"));
            },
            passwordchange: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("passwordchange"));
            },

            feepayment: function () {
                var that = this;
                that.getSplitContObj().toMaster(this.createId("master2"));
            }, Dashboard: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("dashboard1"));

            },
            classwork: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("classwork"));
            }
            ,
            Applications: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("Applications"));
            }
            ,
            Feedback: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("Feedback"));
            }
            ,
            GrivenceCell: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("GrivenceCell"));
            }
            ,
            TrainingandPlacement: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("TrainingandPlacement"));
            }
            ,
            PlanMyTraining: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("PlanMyTraining"));
            }
            ,
            InovationIdeas: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("InovationIdeas"));
            }
            ,
            DigitalLab: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("DigitalLab"));
            }

            ,
            training: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("TrainingandPlacement"));
            }

            ,
            feedue: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("feepayment"));
            },notification: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("notification"));
            }, attendence: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("attendence"));
            }
            , midmarks: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("midmarks"));
            }
            , backlogs: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("backlogs"));
            }
            , placed: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("placed"));
            }
            , progress: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("progress"));
            }



        });
    });