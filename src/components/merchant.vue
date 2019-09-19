<template>
<scroll-view scroll-y>
  <div class="content">
    <div class="shopCont">
      <div class="shop-wrapper">
        <img :src="shopList.shop.share_image" alt="" v-if="JSON.stringify(shopList)!='{}'">
      </div>
      <div class="shop-pinjia">
        <div class="pinjia-cont">
          <span>
            <ul>
              <li v-for="(it,dex) in 5" :key="dex">
                <img
                  :src="dex<4?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFNjcwNTRFNUYzMTFFNjg0OERDM0NGRDUzOUE0MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzREREU5RDRFNUYzMTFFNjg0OERDM0NGRDUzOUE0MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0U2NzA1MkU1RjMxMUU2ODQ4REMzQ0ZENTM5QTQyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0U2NzA1M0U1RjMxMUU2ODQ4REMzQ0ZENTM5QTQyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoT3sSwAAAHVSURBVHjaYvy/V4eBDMACxAeAWBSITRmcLn8i1QAmBvJAGhBbA7EaENeSYwAjGT7mAeI7QCwO5f8GYg2gr+/R2sdlSJaCACsQt9I6qKWAuBiLeATDPl0TWlrcDMRcOOS6aGWxLhAn4pF3BPramxYWd4ASIwE17UDLmahpsT0QexEZKtHEFgQ4sxo4mzAwWAJxCQkh0wL0NT+QPg/El4DZ7DOhfCwNxGZAbIJECzBQBv5D8/w5IL4AdcxZoGPegCzOBHJqoFmFHgDkmEaQxb8JBDktwG9Q4trPQH9whwlc6jAw3KKjpaCaLBhk8Tsg9oHStAb/wB51unwdlo9vA3EAtKahJSgGWrodvQA5DMQpNLR0FtDSCbhKrkXkVHFEAFACziFUZIJaFCupmYKBOATo29+ELAZl8CIqWlwDtPQdsZWEChUtFiKldlKnosXypFisQUWLZUmxmJpBLUeKxcpUtFiGWIsZibD4IxC3QVP/C4IWY2kOMeFwIQcOQz6A6lIgVgDiaiDuB2IlIC7E4wAWtHY4Tou/AfFfNLG3QFwJTSgNUAdAgNPl79CiEJcD/mOrA7BZDLIkFYhfAfEDaANeAdrK/IIzQDEd8BSqvgDU1EFXDhBgABBobUmTnS8hAAAAAElFTkSuQmCC':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFNjcwNTRFNUYzMTFFNjg0OERDM0NGRDUzOUE0MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzREREU5RDRFNUYzMTFFNjg0OERDM0NGRDUzOUE0MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0U2NzA1MkU1RjMxMUU2ODQ4REMzQ0ZENTM5QTQyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0U2NzA1M0U1RjMxMUU2ODQ4REMzQ0ZENTM5QTQyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoT3sSwAAAHVSURBVHjaYvy/V4eBDMACxAeAWBSITRmcLn8i1QAmBvJAGhBbA7EaENeSYwAjGT7mAeI7QCwO5f8GYg2gr+/R2sdlSJaCACsQt9I6qKWAuBiLeATDPl0TWlrcDMRcOOS6aGWxLhAn4pF3BPramxYWd4ASIwE17UDLmahpsT0QexEZKtHEFgQ4sxo4mzAwWAJxCQkh0wL0NT+QPg/El4DZ7DOhfCwNxGZAbIJECzBQBv5D8/w5IL4AdcxZoGPegCzOBHJqoFmFHgDkmEaQxb8JBDktwG9Q4trPQH9whwlc6jAw3KKjpaCaLBhk8Tsg9oHStAb/wB51unwdlo9vA3EAtKahJSgGWrodvQA5DMQpNLR0FtDSCbhKrkXkVHFEAFACziFUZIJaFCupmYKBOATo29+ELAZl8CIqWlwDtPQdsZWEChUtFiKldlKnosXypFisQUWLZUmxmJpBLUeKxcpUtFiGWIsZibD4IxC3QVP/C4IWY2kOMeFwIQcOQz6A6lIgVgDiaiDuB2IlIC7E4wAWtHY4Tou/AfFfNLG3QFwJTSgNUAdAgNPl79CiEJcD/mOrA7BZDLIkFYhfAfEDaANeAdrK/IIzQDEd8BSqvgDU1EFXDhBgABBobUmTnS8hAAAAAElFTkSuQmCC'"
                  alt
                />
              </li>
              <li>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0ZBNzAxRDlFNUYyMTFFNjg0OERDM0NGRDUzOUE0MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0ZBNzAxREFFNUYyMTFFNjg0OERDM0NGRDUzOUE0MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RkE3MDFEN0U1RjIxMUU2ODQ4REMzQ0ZENTM5QTQyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RkE3MDFEOEU1RjIxMUU2ODQ4REMzQ0ZENTM5QTQyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrGsiF0AAAHySURBVHjavJbPK0RRFMffjJEfKaJBfocYCzuULOxloVgoKyVSNiIWWEgiFPmxsbTzB8iSsvV7o5CFUjTIr2xG+BxdNSYz896b+96pT+fN+3G/99y595zjMWxYMBj04XbBD/V+v//F6hhew571QhNUwYSdATw2os3AXUKeuhWCAFFfOR3xSJioWDJMOxox0RbgLiD9n8fyX+87FfFUFFGxOUciJtpa3Emcb1qJekt3xLMmJjrDBL3ahBmsGddi4lVZla6ElhoxeRaARhiGGpMrcw3zcASnLP1rTGGECnENUBfms4zE7Eud+UM4VpM5YDL3HgT7+TEOBYY7JpOZFGHJPD7DXQvJ5tox3LdLEe6EcxdFpZK1e/mjH+Xgw6MLop8SKJpnP+eYC8m/barSOGlDaG3/SSDc2MP1OCi6jsbSv5mLBxt2SpwJkw08EC9lSkexqXMHQwdBheKmTFV3bzQJy2baNFskKjVGnG2lOlVrFC61IhzQKFxsRVjnUpdYEa7QKFxkqhFQDcA7pMYY7BnW4F61u/kx3v2AFHb2Z7yIi2KIPkkthTIGGoNFrsthEG6jfOOL6MOjRpyDu4OksNsPsACriL1FOftpuD4YjVgBKfy50nWYSSDdqquUJV9RefbNZGP4OwHp0zJBVmY58r1vAQYAXg1++91XSEMAAAAASUVORK5CYII="
                  alt
                />
              </li>
            </ul>
            <div class="cont-math">{{shopList.commentgrade}}分</div>
          </span>
          <span class="right">
            <i-icon type="enter" size="28" color="#80848f" />
          </span>
          <span class="text" v-if="JSON.stringify(shopList)!='{}'">{{shopList.shop.comment_num}}人已评价</span>
        </div>
      </div>
      <div class="shop-dizhi">
        <div class="cont">
          <span class="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUE3NThBNEQ0RTg1MTFFNzg2ODBGRUM2MDI4Q0Q3QzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUE3NThBNEU0RTg1MTFFNzg2ODBGRUM2MDI4Q0Q3QzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQTc1OEE0QjRFODUxMUU3ODY4MEZFQzYwMjhDRDdDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQTc1OEE0QzRFODUxMUU3ODY4MEZFQzYwMjhDRDdDMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj1GCAcAAAKBSURBVHjavJVPSFRRFIef04CbrBaVJFLYIgKrhUW1CAQ3MS6sWQQuXJVYBDWuQlqNSKJuNCxJNFzYQmhRrYY2gbuwGqMakKI/RNCiFkqFBVp9B34PLq95M+9pzoWPc989557fPXfuvVPlRWy5XG4rJgNnYJ+GX8NduJ5KpZai5KmKKNaMmYFvcBvycjXBOaiBdkRn1y2I2HHMIxiHHpL+CvirMQNwHlrwP16zIMk2Y17CQxJd4Luefj+k/BC4iu8Tvlv0T8JBvr+H5UyUKbATNkE3CRuwc7AXLgnrz8nXrdjOUgnLCdrvM8aKf2In4Tk08z1jWF9jk4oZ05z4W8qqt2O+wCFYhI/arleBuAPa9t2wDV7ADuK+xq2wQfYN1Kr/rkicP1arWHduLMFq2VUogB2EdJG4tHwFxbpzYwm+lW1ke5ax12CULTzhbKf1R82nmMbA3H9aMsxBgs8knKfbpoMxBLtglvFnCjsMN+TzFDtvc0MPDZOfYI84Y7/hMpNu4rOjf8V+E75XVFWT7pun+5nXuC3+vYkzZjtxUdW7u/g0KTFL9sMRXFZ/Gvrs2YI7qjzvPG1ua9cTN61vuyZLjuAW07IK/9B5QKLTIdcji+mA/X6VRWJs4Qu2KGKyITEfMHsSEd7uEa0uUyImo5iRcsnKCrJiu/Q9kNVbGly5jWX1sC+uW1BtSq/JcBHfsHxTURJFEmTl9jt32bGnorRTXVpXoUsx3v+q0NMb2gsTCNUZ1rex4PtaqiW9eG0QWp3tW9BY5JaIE0wlq7oiR0WHxjZGUKJ2n84a6sdqcbfUF73nrbElvAq3igv6W3qMY35/g7V2+oIF/XGeqkCBhb8CDABJW98nvik2bgAAAABJRU5ErkJggg=="
              alt
            />
          </span>
          <span class="text" v-if="JSON.stringify(shopList)!='{}'">{{shopList.shop.shopaddress}}</span>
          <span class="right">
            <i-icon type="enter" size="28" color="#80848f" />
          </span>
        </div>
        <div class="cont">
          <span class="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAhBAMAAAA4x9bUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUxpcbe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t8XOaPgAAAANdFJOUwD45A5PONEhjXS7p2KWcSILAAABa0lEQVQY02NgYJ+lKOXAAAcVimqKS+A89ibtKbOkCmBcS6XpxSaJ0xkYzItB3DAJAwaGxlQGhoidzkDuJCCLwU2HgcFLaA1Qy6atQG60JAOD6SzBdgaGJCBmsJAwYA5xnSZRwKA0Gcr1aLEBssHcakkDZi+145NSwFzmSToMpic3qlRLg/XWJG5lsFwZKR2ZxrBoOwNrk5Qzg41Sq9qRhQxNSxl4FLcaMLA3piZN2chwKIWBUw3ko6glu4GyUZoMrIsOALkm7q4lmxispQuYJy4HcpmBGnwYeIAqwd6A+ndjA9CTDgzGUJGJqUChraYnj0K4UUCVbhKnkzLcocEBdIOi4OpEjQCI5qUMzLNWuJ6ABCCzG9CbpuEM7MekwNI2YD8C3ZHYDpZu1IFYckgFTFmLQWKBWxJMsW7MAdMcUMdFC7WCqCqILMj/R4uZS4E2QkDlQq0ely4xZ5hHPJLU0pRyEP46nSSYDZQEAA6sXdmkYA7KAAAAAElFTkSuQmCC"
              alt
            />
          </span>
          <span class="text" v-if="JSON.stringify(shopList)!='{}'">{{shopList.shop.orderphone}}</span>
          <span class="right">
            <i-icon type="enter" size="28" color="#80848f" />
          </span>
        </div>
      </div>
      <div class="shop-item">
        <div class="cont">
          <span class="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdBAMAAACkvXo8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURbe3t0xpcbe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3tzatkqkAAAALdFJOU/0AZNovdgysHJK3YJBOXgAAAP5JREFUGNNlkT1vwjAQhk8xEurmCyENGwlfGV11KGORkLoG0QpGIljYjIQ6B1Xdk6Vzpv7O3tlOFNFXkeXH53Pu3gMkRQsFLynvJNASaBDPAFfHYSne6XALP5a/RIxI30TcmCP1ieh7dE8vmY8PaBlHIicuL0PL36grCYHIy8pwvTr2JDx6eM5d3O9LKJ6wyUdUBxhvOpyNQa86/KpBYYelAoFhkiQL5iAdAPEQSJ65ZDj6IM2buM13onz7vhO9b//vlGVc38nCmuoruP4yZgzVjeun/t5yE58h90f9t+l11fgTTFt/IvXr/KuXrb8cd/7+8/9+PjS/Hc1vbxr4A/0IOLqV6gkjAAAAAElFTkSuQmCC"
              alt
            />
          </span>
          <span class="text" v-if="JSON.stringify(shopList)!='{}'">
            营业时间：
            {{shopList.shop.business_hours[0].start+"-"+shopList.shop.business_hours[0].stop}}
          </span>
          <span class="right">
            <i-icon type="enter" size="28" color="#80848f" />
          </span>
        </div>
        <div class="cont">
          <span class="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUE3NThBNEQ0RTg1MTFFNzg2ODBGRUM2MDI4Q0Q3QzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUE3NThBNEU0RTg1MTFFNzg2ODBGRUM2MDI4Q0Q3QzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQTc1OEE0QjRFODUxMUU3ODY4MEZFQzYwMjhDRDdDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQTc1OEE0QzRFODUxMUU3ODY4MEZFQzYwMjhDRDdDMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj1GCAcAAAKBSURBVHjavJVPSFRRFIef04CbrBaVJFLYIgKrhUW1CAQ3MS6sWQQuXJVYBDWuQlqNSKJuNCxJNFzYQmhRrYY2gbuwGqMakKI/RNCiFkqFBVp9B34PLq95M+9pzoWPc989557fPXfuvVPlRWy5XG4rJgNnYJ+GX8NduJ5KpZai5KmKKNaMmYFvcBvycjXBOaiBdkRn1y2I2HHMIxiHHpL+CvirMQNwHlrwP16zIMk2Y17CQxJd4Luefj+k/BC4iu8Tvlv0T8JBvr+H5UyUKbATNkE3CRuwc7AXLgnrz8nXrdjOUgnLCdrvM8aKf2In4Tk08z1jWF9jk4oZ05z4W8qqt2O+wCFYhI/arleBuAPa9t2wDV7ADuK+xq2wQfYN1Kr/rkicP1arWHduLMFq2VUogB2EdJG4tHwFxbpzYwm+lW1ke5ax12CULTzhbKf1R82nmMbA3H9aMsxBgs8knKfbpoMxBLtglvFnCjsMN+TzFDtvc0MPDZOfYI84Y7/hMpNu4rOjf8V+E75XVFWT7pun+5nXuC3+vYkzZjtxUdW7u/g0KTFL9sMRXFZ/Gvrs2YI7qjzvPG1ua9cTN61vuyZLjuAW07IK/9B5QKLTIdcji+mA/X6VRWJs4Qu2KGKyITEfMHsSEd7uEa0uUyImo5iRcsnKCrJiu/Q9kNVbGly5jWX1sC+uW1BtSq/JcBHfsHxTURJFEmTl9jt32bGnorRTXVpXoUsx3v+q0NMb2gsTCNUZ1rex4PtaqiW9eG0QWp3tW9BY5JaIE0wlq7oiR0WHxjZGUKJ2n84a6sdqcbfUF73nrbElvAq3igv6W3qMY35/g7V2+oIF/XGeqkCBhb8CDABJW98nvik2bgAAAABJRU5ErkJggg=="
              alt
            />
          </span>
          <span class="text">服务区域：点此查看有效区域</span>
          <span class="right">
            <i-icon type="enter" size="28" color="#80848f" />
          </span>
        </div>
      </div>
      <div class="shop-shong">
        <div class="cont">
          <span class="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUxpcbe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t3A++QAAAAALdFJOUwCBQFzyoL4Y0woqOvh4YAAAAR1JREFUGNNtUT1Lw1AUPWmsoXF5kTgUl/LWtwjVKYtBxIpLRYeIS1yK4BLB7g4KgksR3YOOLqXBD3x/zvM+CqV6A4938s6999xzAUZn504PTibwEaXfx/2Nx7zyeDuvecbpnoMvH+4hOj+zyVdbnhd+mhLt2bwO1JBHxue+JzTM2udlhI6UssJpheDA4pbWWuBG4FlglfcSWBMIDpHViOWDrC2OGxSwfFiMe34OS6mIC+Rsy/yprYcUbPkkN2XPqcoMjoQC5pj81tThruGzXrirdDmzvwrTLyiVrBuEX6Yf9bR/yD/S+tbood6Vywy4TpKJ0ct53sfae8l5OG+BVI8YFxhXxo834DVhrFvOgl9Y8rO35Lf4dx9/9rW4z180tUxvlW0ZfAAAAABJRU5ErkJggg=="
              alt
            />
          </span>
          <span class="text" v-if="JSON.stringify(shopList)!='{}'">起送价：{{shopList.shop.basicprice}}元</span>
          <span class="right">
            <i-icon type="enter" size="28" color="#80848f" />
          </span>
        </div>
        <div class="cont">
          <span class="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUxpcbe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t8XOaPgAAAANdFJOUwDw/l6fFyoIR9O5iHJojWhNAAABOElEQVQY02NgAAJ2k4lKks4FDFDAulHTx/jIJOkAKN9QOgFIsm0UhnBLVCASrE7uYM2LDKDqmLVARrBowMxhaHIAEkYgaXagCQkMzMpAXSIMXQUM3KIMzGoMDI4BIFbiVAb2KQycQMWBGxgKNzCwShUwdBYcBNrCLc5gBNSZaDZz1SrBVdMY2JQZPEFOYT1svNDY+CgDwxQghICdYNKTQYaBPTUM6A4vMP8ggzIDq5JSCEj7qlVAxwD5DOFNNXvOaJ05swfElwG5k4GBR9AVon4KhJ+4dWED2DxPMJ9DqoBHpQBkH8g9TWwgrwOdDXQP0L08SttmgFw1DeReoH8cO6RaQYaFBQD9wyrCocGQpaQoKSiklBAVAAoPoAllHcYdHR1gJyKFFwNqeHIkoIX3BqzxgRFfyPEJAMuoSyM8cwC9AAAAAElFTkSuQmCC"
              alt
            />
          </span>
          <span class="text" v-if="JSON.stringify(shopList)!='{}'">配送费：{{shopList.shop.delivery_fee}}元</span>
          <span class="right">
            <i-icon type="enter" size="28" color="#80848f" />
          </span>
        </div>
      </div>
    </div>
    <div class="pos" v-if="blns">
        <div class="img">
          <img
            src="data:image/png;base64,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"
            alt
          />
        </div>
        <div class="xia"></div>
      </div>
  </div>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      shopList: {},
      blns:true
    };
  },
  components: {},
  mounted() {
    this.$apis.geteval().then(res => {
      this.shopList = res.data;
      setTimeout(()=>{
        this.blns=false
      },80)
    });
  },

  methods: {}
};
</script>

<style scoped lang="scss">
.content {
  width: 375px;
  height: 460px;
  .shopCont {
    .cont {
      border-bottom: 1px solid #f5f5f5;
      background-color: #fff;
      color: #000;
      padding-top: 14px;
      padding-bottom: 12px;
      margin-left: 16px;
      .icon {
        width: 17px;
        height: 17px;
        margin-right: 12px;
        img {
          width: 17px;
          height: 17px;
        }
      }
      .text {
        width: 210px;
        height: 17px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .right {
        float: right;
        margin-right: 18px;
      }
    }

    .shop-wrapper {
      img{
        width: 375px;
        height: 265px;
      }
    }
    .shop-pinjia {
      height: 35px;
      padding-top: 10px;
      .pinjia-cont {
        margin-left: 16px;
        span {
          ul {
            li {
              float: left;
              width: 14px;
              height: 14px;
              margin-right: 5px;
              img {
                width: 14px;
                height: 14px;
              }
            }
          }
          .cont-math {
            float: left;
            color: #fcbb2b;
            font-size: 13px;
            margin-left: 15px;
          }
        }
        .text {
          float: right;
        }
        .right {
          float: right;
          margin-right: 18px;
        }
      }
    }
    .shop-dizhi {
      border-top: 10px solid #f5f5f5;
    }
    .shop-item {
      border-top: 10px solid #f5f5f5;
    }
    .shop-shong {
      border-top: 10px solid #f5f5f5;
    }
  }
  .pos {
    position: fixed;
    width: 375px;
    height: 460px;
    background: #fff;
    top: 140px;
    left: 0;
    .img {
      top: 170px;
      left: 170px;
      width: 27px;
      height: 37px;
      position: absolute;
      animation: shaking 1.5s linear infinite;
      img {
        width: 27px;
        height: 37px;
      }
    }

    @keyframes shaking {
      25% {
        margin-top: -10px;
      }
      50% {
        margin-top: 0px;
      }
      75% {
        margin-top: 20px;
      }
      100% {
        margin-top: 0px;
      }
    }
    .xia {
      position: absolute;
      top: 225px;
      left: 182px;
      width: 3px;
      height: 1px;
      /* border-radius: 1px; */
      background: #676767;
      animation: shak 2.8s linear infinite;
    }
    @keyframes shak {
      0% {
        transform: scale(1); /*开始为原始大小*/
      }
      25% {
        transform: scale(5); /*放大1.1倍*/
      }
      50% {
        transform: scale(1);
      }
      75% {
        transform: scale(5);
      }
    }
  }
}
</style>
