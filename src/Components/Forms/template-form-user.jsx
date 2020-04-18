import React from 'react';

export default () => {
    return (
        <div className="customContainer">
             <form>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="empresa">Sociedad/Empresa</label>
                        <input type="text" className="form-control" id="empresa" name="empresa" placeholder="Sociedad o Empresa" />
                    </div>
                    <div class="form-group">
                        <label for="cif">CIF</label>
                        <input type="text" className="form-control" id="cif" name="cif" placeholder="Código de identificación fiscal" />
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Contraseña" />
                        <small id="password" className="form-text text-muted">mostrar algún error con la password</small>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" className="form-check-input" name="condiciones" id="condiciones" />
                        <label className="form-check-label" for="condiciones">Acepta las condiciones del servicio</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel enim ac est tristique mollis eget eget lacus. Quisque efficitur blandit vehicula. Donec sed accumsan metus. Morbi placerat erat et nisi hendrerit, a tempus enim ullamcorper. Nunc egestas massa nec eros viverra vulputate. Donec hendrerit mauris ipsum, eget bibendum risus porta a. Maecenas sagittis nunc eu turpis molestie, a commodo felis elementum. Cras ornare ornare ipsum, vitae ullamcorper ante faucibus ut. Vestibulum luctus laoreet sem vitae fermentum. Pellentesque sollicitudin est lorem, sed fringilla sapien efficitur sit amet. Sed sollicitudin quam eget convallis tempor. Vivamus sapien neque, ultricies id velit at, fermentum tempor lacus. Mauris bibendum nulla eget massa aliquam, vitae pretium felis laoreet.

Maecenas suscipit purus ut nisl dignissim, id pulvinar nisi pellentesque. Nulla facilisi. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet elit quis augue gravida venenatis non volutpat massa. Sed finibus, odio sed tristique fringilla, ante quam egestas orci, id efficitur nibh ipsum et orci. Nulla suscipit dignissim eros sit amet auctor. Aenean blandit ligula at volutpat euismod. Fusce eu elit quis diam lobortis placerat vitae id massa. Integer faucibus dolor lacus, eu feugiat felis scelerisque vitae. Nunc facilisis ut magna quis pellentesque. Vivamus nibh odio, dapibus sodales sem sed, viverra bibendum elit. Suspendisse pharetra lacinia sapien, sed interdum tortor sollicitudin id. Nulla vehicula convallis odio in porttitor. Aenean rhoncus aliquam tortor ut scelerisque. Maecenas eu convallis ipsum.

Aliquam ornare non odio sed ornare. Vivamus maximus lacus quis lacus aliquet ultricies. Proin ac augue cursus, sollicitudin sem at, scelerisque ante. Phasellus in mi mattis, luctus massa ut, tincidunt augue. In gravida eleifend nunc sed pulvinar. Cras sed commodo diam. Etiam nisl nisl, lobortis non metus at, interdum eleifend libero. Donec fermentum ipsum ut elit elementum condimentum. Morbi imperdiet nibh at commodo aliquet. Cras malesuada scelerisque sem, vel feugiat neque ullamcorper a.

Curabitur mattis ante sed lectus tempor, vel pulvinar metus maximus. Nam cursus nunc et ullamcorper fermentum. Cras scelerisque imperdiet dolor, et varius nunc vulputate at. Proin nec ultrices magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus placerat urna eget augue cursus, at tristique neque laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Morbi accumsan urna ut hendrerit congue. Duis luctus vel nibh a semper. Vestibulum magna tortor, scelerisque non eleifend id, feugiat eget purus. Phasellus imperdiet tellus a quam porta, id facilisis lacus mattis. Aenean eu ornare velit. Morbi vitae massa et lectus mattis consequat. Sed condimentum blandit odio in aliquam. Phasellus luctus nibh id rutrum egestas. Suspendisse blandit sit amet velit nec suscipit.

Vestibulum et erat sapien. Nunc eget ullamcorper lectus. Nullam turpis nunc, tristique non odio vel, tristique pellentesque libero. Proin accumsan, diam ut semper pulvinar, nibh nisl facilisis tortor, at porttitor massa lacus ac sem. Donec id lorem eu tellus ultrices tincidunt vel eu ex. Duis diam orci, fringilla vitae maximus ac, porttitor at dui. Duis aliquam, metus gravida feugiat molestie, felis nunc finibus lectus, quis auctor velit erat nec ligula.

Cras venenatis eros nunc, eu laoreet nisl laoreet ut. Sed mi orci, pretium luctus molestie finibus, posuere nec ante. In et tincidunt ligula. Sed rhoncus velit nisi, in consequat enim ultricies a. Vestibulum sollicitudin velit nulla, in suscipit est ornare eget. Mauris tincidunt tortor a elit iaculis malesuada. Pellentesque tempus purus tempor, elementum ipsum at, mollis dolor.

Vivamus tellus mauris, commodo sed egestas ut, venenatis eu tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam euismod fermentum felis eget ultricies. Nunc quis varius enim, sed viverra erat. Nulla libero neque, tristique nec venenatis vel, scelerisque non massa. Cras odio dolor, posuere vitae consectetur eu, euismod ac est. Donec sollicitudin varius aliquam. Sed tempor dui et nibh eleifend ultrices.

Morbi a consequat sapien, eu convallis massa. Aenean tortor nunc, consequat quis fringilla sit amet, efficitur non risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean iaculis turpis ultrices, condimentum lorem sit amet, posuere metus. Pellentesque ut semper libero. Morbi euismod lobortis sollicitudin. Nulla sem odio, scelerisque sit amet quam non, vestibulum rutrum mi.

Vivamus blandit ipsum quis sapien vestibulum vehicula. Suspendisse ut felis venenatis, congue nibh mollis, suscipit ex. Phasellus porttitor eros ac nunc faucibus fermentum. Nunc purus eros, maximus non finibus laoreet, mattis in ex. Nunc ullamcorper nibh nec diam ultricies blandit. Proin et risus et nisl mattis auctor sit amet sit amet velit. Nam lacus velit, accumsan quis pharetra ac, vulputate non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis enim a leo porta, ac venenatis ipsum faucibus. Aenean euismod consectetur lectus, quis tempor est rhoncus sit amet. Cras et porttitor augue, eget bibendum nunc. Maecenas eget ultrices magna. Mauris aliquam nibh sit amet arcu maximus, nec volutpat mauris tincidunt. Sed lobortis magna sed justo vulputate, at tincidunt nisi euismod. Praesent sagittis molestie luctus. Cras ac aliquet arcu.

Aliquam eu suscipit neque, et elementum dolor. Maecenas ac dictum est. Pellentesque molestie molestie orci, nec dictum lectus hendrerit sit amet. Nullam venenatis lorem at tristique sodales. Fusce nec nibh ut dui tristique imperdiet et nec leo. Aenean odio tortor, venenatis vel efficitur ut, egestas sed ligula. In finibus blandit elementum. Duis hendrerit leo sed nisl hendrerit fermentum nec sit amet massa. Fusce augue nisi, laoreet ut lacus lacinia, scelerisque egestas ante. Donec et urna quis mauris luctus ultricies. Vivamus tellus turpis, gravida eu dapibus sit amet, blandit vel nibh. Aenean sit amet aliquam ante. Vestibulum condimentum dictum quam vitae faucibus. Praesent interdum ex posuere libero malesuada dictum.

Praesent ipsum lacus, facilisis eu facilisis id, lobortis vel arcu. Nunc non bibendum est, id ornare diam. Proin quis justo a velit hendrerit venenatis ut vel enim. Aliquam erat volutpat. In dignissim orci non mi auctor suscipit. Curabitur vulputate rutrum malesuada. Donec efficitur purus ut nisi eleifend finibus. Mauris eget nulla finibus tortor dictum imperdiet. Mauris dolor mi, dapibus in nisl in, sagittis elementum justo. Suspendisse tempor lorem neque, non faucibus orci elementum vitae. Phasellus a efficitur metus. Proin facilisis nec massa ac venenatis. Integer feugiat, ligula ac gravida porttitor, justo ipsum maximus diam, nec dictum nibh tortor vitae nunc.

Vivamus vehicula mauris eros. Curabitur volutpat risus quis massa tempus, in commodo velit porttitor. Fusce convallis ante orci. Sed efficitur quis lectus eu tempus. Fusce vel enim lectus. Nunc arcu sapien, mattis id congue in, elementum at nisl. Mauris eget eros aliquam, pharetra felis sit amet, elementum velit. Curabitur at cursus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin convallis ex sit amet ex ullamcorper finibus. Nunc euismod neque sit amet pretium interdum.

Aliquam tristique augue vel felis scelerisque aliquam. Nam porta blandit erat nec tincidunt. Nulla efficitur imperdiet tortor nec posuere. Donec justo ex, dictum et odio sed, luctus aliquam sapien. Morbi varius posuere sagittis. Nulla euismod arcu sed mi tincidunt lobortis. Aliquam in elementum sem, vitae hendrerit ipsum. Aenean fermentum vehicula eleifend. Etiam a nunc non sem varius auctor in eu justo. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ultricies sagittis mollis.

Donec eu euismod sapien. Fusce porta ut felis non rhoncus. Quisque viverra, nisl blandit dapibus auctor, lorem nibh bibendum turpis, quis ultrices leo nisl sed risus. Nulla consectetur massa sed erat pretium, maximus placerat turpis posuere. Praesent vel diam turpis. Aliquam sagittis sem nec gravida commodo. Suspendisse venenatis, nulla ut malesuada lobortis, ligula mauris commodo ante, nec malesuada libero velit eget nibh. Nulla facilisi. Cras ullamcorper at erat a hendrerit. Suspendisse porta ac arcu non viverra. Maecenas lacus felis, consequat in tincidunt vitae, aliquet in dui.

Aliquam egestas enim sit amet massa accumsan facilisis sed at risus. Curabitur mauris sapien, posuere sit amet vestibulum sit amet, mollis vitae augue. Sed sagittis, ante sit amet consectetur vehicula, ligula urna cursus nisi, a egestas dui dolor id nulla. Aenean euismod nisl sed lectus efficitur, sed consequat odio gravida. Mauris molestie risus ex, eu gravida tortor placerat ut. In bibendum posuere arcu, id bibendum nunc pulvinar a. Nulla sit amet fringilla arcu, non gravida neque. Nam at ipsum in est lacinia dignissim posuere quis nunc. Nunc eu rhoncus velit. Sed eget scelerisque velit, ut tristique turpis.

Aliquam augue ipsum, vehicula ac felis et, aliquam sodales leo. Nulla quis tellus dictum, aliquam erat sit amet, condimentum lectus. Proin lobortis bibendum magna id vulputate. Donec et sapien bibendum felis euismod scelerisque id lobortis mi. Mauris dapibus posuere eros, id facilisis nisi accumsan ut. Proin eu consectetur velit, et congue velit. Suspendisse tincidunt dui et tristique viverra. Vestibulum eleifend in felis sit amet semper. Sed vel malesuada elit. Cras lacus dui, placerat pulvinar ante at, aliquam molestie dolor. Sed vitae hendrerit lectus.

Pellentesque maximus pellentesque commodo. Nam eget mauris consequat, elementum arcu cursus, consectetur orci. Fusce eget feugiat diam. Donec lacinia odio et odio pharetra, non maximus lorem cursus. Ut non erat varius, volutpat sapien eu, porttitor nisi. Suspendisse convallis nec magna ut ornare. Suspendisse odio velit, placerat tempus lacinia sit amet, rhoncus ut magna. Morbi sit amet urna ut magna rhoncus porta in sit amet orci.

Mauris sodales nulla ac enim condimentum tincidunt. Suspendisse feugiat venenatis lorem, quis aliquet tellus elementum in. Nam vel orci in nisi rutrum auctor eget a ex. Nullam imperdiet massa dolor, sit amet consectetur risus interdum vitae. Donec sodales eros ut erat mattis ultricies. Integer accumsan sagittis pulvinar. Ut hendrerit consequat sollicitudin. Vivamus fringilla, diam eu ornare dapibus, est erat malesuada quam, in condimentum enim purus eu arcu. Cras vel ante elit. Quisque vel augue augue. Suspendisse potenti.

Sed gravida ultrices est. In vitae ipsum nec enim euismod porta fermentum lacinia magna. Aliquam erat volutpat. Sed bibendum velit vel felis pharetra, in scelerisque orci volutpat. In eleifend et dolor nec ornare. Integer feugiat vehicula vehicula. Maecenas pharetra euismod lectus, eu congue felis varius id. Vivamus vitae nibh commodo, pulvinar ex eu, tristique tellus. Nullam nec nibh ligula. Aenean cursus vel metus vel placerat. Vivamus at ante rhoncus, aliquet felis sed, hendrerit ex. Donec feugiat posuere tortor vitae accumsan. Nam ac mattis nunc, vel lobortis lectus. Duis sit amet arcu lorem. Phasellus eleifend eleifend turpis, ac tristique dolor dictum sit amet. Curabitur lobortis tortor in enim tristique molestie.
                </p>
        </div>
    )
}