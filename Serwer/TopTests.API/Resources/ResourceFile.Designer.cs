﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TopTests.API.Resources {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "16.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    public class ResourceFile {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal ResourceFile() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("TopTests.API.Resources.ResourceFile", typeof(ResourceFile).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Passwords aren&apos;t the same/Or code is bad.
        /// </summary>
        public static string Bad {
            get {
                return ResourceManager.GetString("Bad", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Code of verification is Bad.
        /// </summary>
        public static string CodeBad {
            get {
                return ResourceManager.GetString("CodeBad", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Email, password or your account not active.
        /// </summary>
        public static string EmailPassword {
            get {
                return ResourceManager.GetString("EmailPassword", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Please check your file, some fields are empty.
        /// </summary>
        public static string FieldEmpty {
            get {
                return ResourceManager.GetString("FieldEmpty", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Id is not exist.
        /// </summary>
        public static string Id {
            get {
                return ResourceManager.GetString("Id", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Object/Value are null.
        /// </summary>
        public static string Null {
            get {
                return ResourceManager.GetString("Null", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Question exist in database.
        /// </summary>
        public static string QuestionExist {
            get {
                return ResourceManager.GetString("QuestionExist", resourceCulture);
            }
        }
    }
}
