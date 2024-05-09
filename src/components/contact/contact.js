import "./contact.css";

export default function contact() {
  return (
    <div className='container'>
            <div class='contact-section'>
            <div class="row my-4 justify-content-center">
                    
                    <div class="col-lg-6">
                        <form>
                            <div class="form-content mb-4">
                                    <div class="form-details">
                                        <input type="text" id="customername" name="" placeholder="Full Name"
                                            class="w-100 mb-4" />
                                        <input type="email" id="customeremail" name="" placeholder="Email"
                                            class="w-100 mb-4" />
                                        <input type="number" id="Customernumber" name="" placeholder="Phone Number"
                                            class="w-100 mb-4" />
                                        
                                       
                                        <textarea name="message" id="message" cols="60" rows="4"  placeholder="Message"></textarea>
                                    </div>
                                    <div class=" form-btn text-center m-3">
                                        <button>Send Message
                                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                        </form>
                    </div>                   
                </div>

            </div>

        </div>
  )
}
